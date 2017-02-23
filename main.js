// Generated by CoffeeScript 1.12.4
(function() {
  var Gist, bind, currentGist, gistsAll;

  bind = rx.bind;

  rx.rxt.importTags();

  Gist = (function() {
    function Gist(id, desc, content) {
      this.id = id;
      this.desc = desc;
      this.content = content;
    }

    return Gist;

  })();

  gistsAll = rx.array([new Gist(1, 'javascript', 'var x = 1;'), new Gist(2, 'java', 'int x = 1;'), new Gist(3, 'python', 'x = 3')]);

  currentGist = rx.cell(gistsAll.at(0));

  $('body').append(div({
    "class": 'container'
  }, [
    div({
      "class": 'sidebar'
    }, [
      ul({}, gistsAll.map(function(g) {
        return li({
          "class": "" + (g === currentGist.get() ? 'selected' : void 0),
          click: function() {
            return currentGist.set(g);
          }
        }, g.desc);
      }))
    ]), div({
      "class": 'preview'
    }, [
      h3({}, bind(function() {
        return currentGist.get().desc;
      })), pre({}, bind(function() {
        return currentGist.get().content;
      }))
    ])
  ]));

}).call(this);
