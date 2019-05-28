function resolver() {
   require('dns').resolve('www.google.com', function(err) {
      if (err) {
         console.log("No connection");
         return false;
      } else {
         console.log("Connected");
         return true;
      }
  });
}

export default resolver;