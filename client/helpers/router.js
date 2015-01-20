Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', function() {
  this.render('postsList');
});

Router.route('/posts/:_id', function() {
  var post = Posts.findOne({_id: this.params._id});
  this.render('postPage', {data: post});
});
