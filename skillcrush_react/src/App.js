import React, { Component } from 'react';
import './App.css';
import { BlogList } from './components/BlogList/BlogList.js';
import { NavBar } from './components/NavBar/NavBar.js';
import { RecsList } from './components/RecsList/RecsList.js';
import { PhotoGallery } from './components/PhotoGallery/PhotoGallery.js';
import { Form } from './components/Form/Form.js';

const postsAPI = 'http://localhost:5000/api/posts';
const photosAPI = 'http://localhost:5000/api/photos';
const recsAPI = 'http://localhost:5000/api/recs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      recs: ['test'],
      photos: ['test'],
      form: 'none',
      formData: {},
      formStatus: 'new',
      locations: []
    };

    this.tempLocations = [];

    this.launchForm = this.launchForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.filterAll = this.filterAll.bind(this);
  }

  componentWillMount() {

    fetch(postsAPI)
      .then(data => data.json())
      .then(posts => {
        this.setState({posts})
        this.state.posts.forEach(post => {
          this.tempLocations.push(post.location);
          this.tempLocations = [...new Set(this.tempLocations)];
        })
      });

    fetch(photosAPI)
      .then(data => data.json())
      .then(photos => {
        this.setState({photos});
        this.state.photos.forEach(photo => {
          this.tempLocations.push(photo.location);
          this.tempLocations = [...new Set(this.tempLocations)];
        })
      });


    fetch(recsAPI)
      .then(data => data.json())
      .then(recs => {
        this.setState({recs});
        this.state.recs.forEach(rec => {
          this.tempLocations.push(rec.location);
          this.tempLocations = [...new Set(this.tempLocations)];
        })
      });




    }

  componentDidMount() {
    console.log(this.state);
    this.setState({locations: this.tempLocations});

  }

  filterAll(location) {


    fetch(postsAPI)
    .then(data => data.json())
    .then(posts => {
      let filteredPosts = [];
      posts.forEach(post => {
        if (post.location.toUpperCase() === location.toUpperCase()) {
          filteredPosts.push(post);
        }
      })
      console.log(filteredPosts);
      this.setState({posts: filteredPosts})
    })

    fetch(photosAPI)
      .then(data => data.json())
      .then(photos => {
        let filteredPhotos = [];
        photos.forEach(photo => {
          if (photo.location.toUpperCase() === location.toUpperCase()) {
            filteredPhotos.push(photo);
          }
        })
        this.setState({photos: filteredPhotos})
      })

      fetch(recsAPI)
      .then(data => data.json())
      .then(recs => {
        let filteredRecs = [];
        recs.forEach(rec => {
          if (rec.location.toUpperCase() === location.toUpperCase()) {
            filteredRecs.push(rec);
          }
        })
        this.setState({recs: filteredRecs})
      })
    }



  launchForm(type, data) {
    if (data) {
      this.setState({
        formStatus: 'edit'
      })
    }
    else {
      this.setState({
        formStatus: 'new'
      })
    }
    this.setState({
      form: type,
      formData: data,
    })

  }

  closeForm() {
    this.setState({form: 'none'})
  }

  render() {
    const formState = this.state.form;
    const dataToSend = this.state.formData || "";


    return (
      <div className="App">
        <NavBar
          locations={this.state.locations}
          launchForm={this.launchForm}
          filterAll={this.filterAll}
        />
        {formState !== 'none' &&
          <Form type={formState} formStatus={this.state.formStatus} data={dataToSend} closeForm={this.closeForm}/>
        }
        <BlogList posts={this.state.posts} launchForm={this.launchForm} />
        <RecsList recs={this.state.recs} launchForm={this.launchForm}  />
        <PhotoGallery photos={this.state.photos} launchForm={this.launchForm}   />

      </div>
    );
  }
}

export default App;
