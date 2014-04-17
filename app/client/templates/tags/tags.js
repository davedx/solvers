UI.registerHelper('renderSmallTags', function (mayUpdate, collection, options) {
  if (options === undefined) { options = collection; collection = null }
  //DC: not sure why, but I needed to add a check for collection to stop it
  //crashing. But now tags aren't shown on home page at all.
  if (Template.listOfSmallTags && collection) {
    return new Spacebars.SafeString(Template.listOfSmallTags({
        data : this, collection : collection, mayUpdate : mayUpdate
      }));
  }
  return '';
});

Template.listOfSmallTags.helpers({
  listOfSmallTags: function () {
    var tags = [], data = this && this.data;
    var result = {};
    if (data && data.tags) {
      var maxtags = Math.min(data.tags.length, 10);
      for (var i=0; i<maxtags; i++)
        tags.push({docId:data._id, tagName:data.tags[i], mayRemove: this.mayUpdate});
    }
    result.tags = tags;
    result.readwrite = this.mayUpdate;
    return result;
  }
});