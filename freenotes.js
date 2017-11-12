var mongodb = require('mongodb');
module.exports = function (ctx, done) {
  mongodb.MongoClient.connect(ctx.data.MONGO_URL, function(err, db) {
    if (ctx.data.text === undefined && ctx.data.title !== undefined && ctx.data.collect !== undefined){
      db.collection(ctx.data.collect).findOne({title: ctx.data.title}, function(err, document){
        if(err) throw err;
        db.close(function (err) {if(err) throw err;});
        done(null, document.text);
      });
    }else if (ctx.data.text === undefined && ctx.data.title === undefined && ctx.data.collect !== undefined){
      db.collection(ctx.data.collect).find().toArray(function (err, documents){
        if(err) throw err;
        var sRet = '';
        documents.forEach(function (doc) {
            sRet = sRet + doc.title + "\n";
        });
        db.close(function (err) {if(err) throw err;});
        done(null, sRet);
      });
    }else if (ctx.data.text === undefined && ctx.data.title === undefined && ctx.data.collect === undefined){
      db.collection('categories').find().toArray(function (err, documents){
        if(err) throw err;
        done(null, documents);
      })
    }else{
      db.collection('categories').findAndModify(
        {name: ctx.data.collect},
        [['_id','asc']],
        { $set: {name: ctx.data.collect} }, 
        {upsert: true}
      );
      
      db.collection(ctx.data.collect).findAndModify(
        {title: ctx.data.title},
        [['_id','asc']],
        { $set: { text: ctx.data.text } }, 
        {upsert: true}
      );
      db.close(function (err) {if(err) throw err;});
      done(null, 'Saved note.');
    }
  });
};