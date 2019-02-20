if (process.env.NODE_ENV === 'production') {
  // module.exports = {mongoURI: 'mongodb://mknerr:mknerr67@ds153314.mlab.com:53314/vidjot-prd'};
  
}
else {
  module.exports = {mongoURI: 'mongodb://localhost/skillcrush-dev'}

}
