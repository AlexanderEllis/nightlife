export default function() {
  this.namespace = '/api';

  let bars = [{
    type: 'bars',
    id: 'sports-bar',
    attributes: {
      name: 'Sports Bar',
      location: 'Brighton',
      going: 0,
      rating: 4,
      description: 'This is a great bar to catch a game at.',
      image: 'http://www.hermarys.com/wp-content/uploads/sports-bar-600x360.png'
    }
  }, {
    type: 'bars',
    id: 'dive-bar',
    attributes: {
      name: 'Dive Bar',
      location: 'Allston',
      going: 0,
      rating: 3,
      description: 'This is a great bar to have a cheap beer.',
      image: 'https://divebardiscourse.files.wordpress.com/2015/09/dive-counter.jpg'
    }
  }, {
    type: 'bars',
    id: 'wine-bar',
    attributes: {
      name: 'Wine Bar',
      location: 'Brookline',
      going: 0,
      rating: 5,
      description: 'This is a great bar to have wine at.',
      image: 'https://vinepair.com/wp-content/uploads/2015/10/Krog-Bar.jpg'
    }
  }]

  this.get('/bars', function(db, request) {
    if (request.queryParams.name !== undefined) {
      let filteredBars = bars.filter(function(i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredBars };
    } else {
      return { data: bars };
    }
  });
}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

