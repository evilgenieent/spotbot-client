import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller){
    this.controllerFor("index").set("queue", this.store.findAll("queued-track"));

    var ref = this.store.adapterFor("application").get("_ref");
    ref.child("playlist/tracks").on("value", (data)=>{
      controller.set("playlistTracks", data.val());
    });
    ref.child("playlist/uri").on("value", (data)=>{
      controller.set("playlistUri", data.val());
    });
    ref.child("playlist/name").on("value", (data)=>{
      controller.set("playlistName", data.val());
    });
  }
});
