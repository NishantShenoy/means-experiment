import React from 'react';
import {DonorSignInContext} from './donor-context-provider';

export default class DonationForm extends React.Component {

    clearphoto;
    video = null;
    canvas = null;
    photo = null;
    startbutton = null;
    width = 320;    // We will scale the photo width to this
    height = 0;     // This will be computed based on the input stream
    streaming = false;

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            autoFoodClassifications: [],
            additionalFoodClassifications: [],
            pickupLocation: '',
            foodExpiry: '',
            fairMarketValue: '',
            donationGrossWeight: ''
        }

        this.handleDonationTitleChange = this.handleDonationTitleChange.bind(this);
        this.handleDonationDescriptionChange = this.handleDonationDescriptionChange.bind(this);
        this.handleDonationEstimatedMarketValue = this.handleDonationEstimatedMarketValue.bind(this);
        this.handleDonationGrossWeight = this.handleDonationGrossWeight.bind(this);
    }

    componentDidMount(){
        this.capturePhoto = () => {

            let video = null;
            let canvas = null;
            let photo = null;
            let startbutton = null;
            let width = 320;    // We will scale the photo width to this
            let height = 0;     // This will be computed based on the input stream
            let streaming = false;
    
    
            video = document.getElementById('video');
            canvas = document.getElementById('canvas');
            photo = document.getElementById('photo');
            startbutton = document.getElementById('startbutton');
        
            navigator.getMedia = ( navigator.getUserMedia ||
                                   navigator.webkitGetUserMedia ||
                                   navigator.mozGetUserMedia ||
                                   navigator.msGetUserMedia);
        
            navigator.getMedia(
              {
                video: true,
                audio: false
              },
              (stream) => {
                if (navigator.mozGetUserMedia) {
                  video.mozSrcObject = stream;
                } else {
                  var vendorURL = window.URL || window.webkitURL;
                  video.src = vendorURL.createObjectURL(stream);
                }
                video.play();
              },
              (err) => {
                console.log("An error occured! " + err);
              }
            );
    
            console.log(video)
            video.addEventListener('canplay', (ev) => {
              if (!streaming) {
                height = video.videoHeight / (video.videoWidth/width);
              
                // Firefox currently has a bug where the height can't be read from
                // the video, so we will make assumptions if this happens.
              
                if (isNaN(height)) {
                  height = width / (4/3);
                }
              
                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
              }
            }, false);
        
            startbutton.addEventListener('click', (ev) =>
            {
                var context = canvas.getContext('2d');
                if (width && height) {
                  canvas.width = width;
                  canvas.height = height;
                  context.drawImage(video, 0, 0, width, height);
                
                  var data = canvas.toDataURL('image/jpeg');
                  photo.setAttribute('src', data);
                  console.log(data)
                } else {
                    var context = canvas.getContext('2d');
                    context.fillStyle = "#AAA";
                    context.fillRect(0, 0, canvas.width, canvas.height);
                
                    var data = canvas.toDataURL('image/jpeg');
                    photo.setAttribute('src', data);
                    console.log(data)
                }
              ev.preventDefault();
            }, false);
        }
        window.addEventListener('load', this.capturePhoto, false);
    }

    handleDonationTitleChange = (event) => {
        let newState = Object.assign(this.state, {title: event.target.value});
        this.setState(newState);
    }
    handleDonationDescriptionChange = (event) => {
        let newState = Object.assign(this.state, {description: event.target.value});
        this.setState(newState);
    }

    setFoodExpiry = (event) => {
        console.log(event);
        let foodExpiryRadios = document.getElementsByClassName('foodexpiryradio');
        // if(foodExpiryRadios) {
        //     console.log(foodExpiryRadios);
        //     for(var i=0; i<foodExpiryRadios.length;i++ ) {
        //         if(foodExpiryRadios.length[i].checked) {
        //             let newState = Object.assign(this.state, {foodExpiry: foodExpiryRadios.length[i]});
        //             this.setState(newState);
        //         }
        //     }
        // }
    }
    handleDonationEstimatedMarketValue = (event) => {
        let newState = Object.assign(this.state, {fairMarketValue: event.target.value});
        this.setState(newState);
    }
    handleDonationGrossWeight = (event) => {
        let newState = Object.assign(this.state, {donationGrossWeight: event.target.value});
        this.setState(newState);
    }

    donateNow = (context) => {
        context.setDonationDetails(this.state);
    }


    render() {
        return(
            <div>
                <form name="donationForm">
                    <DonorSignInContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <div className="form-group">
                                <div className="well">
                                    <div>
                                        <label for="orgNameInput">Photo</label>
                                    </div>
                                    <div>
                                        <div class="camera">
                                            <video id="video">Video stream not available.</video>
                                            <button type="button" id="startbutton" className="btn btn-primary glyphicon glyphicon-camera">Take photo</button>
                                        </div>
                                        <canvas id="canvas">
                                        </canvas>
                                        <div class="output">
                                            <img id="photo" alt="The screen capture will appear in this box." />
                                        </div>
                                    </div>
                                </div>
                                <div className="well">
                                    <label for="titleOfDonation">Title</label>
                                    <input type="text" className="form-control" placeholder="Example: Bag of rice" onchange={this.handleDonationTitleChange} required />
                                    <label for="descriptionOfDonation">Description of this item</label>
                                    <input type="text" className="form-control" placeholder="Example: Bag of white jasmine rice" onchange={this.handleDonationDescriptionChange} required />
                                </div>
                                <div className="well">
                                    <div className="form-row">
                                        <label for="pickupLocation">Pickup Location</label>
                                        <div>
                                            {/* map goes here */}
                                        </div>
                                    </div>
                                </div>
                                <div className="well">
                                    <label for="foodExpiry">Food Expiry</label>
                                    <div>
                                        <input type="radio" id="shelfStable" name="foodExpiry" className="foodexpiryradio" onClick={this.setFoodExpiry.call(this)} checked />
                                        <label for="shelfStable">Shelf Stable</label>
                                    </div>

                                    <div>
                                        <input type="radio" id="timeSensitive" className="foodexpiryradio" name="foodExpiry" onClick={this.setFoodExpiry.call(this)} />
                                        <label for="timeSensitive">Time Sensitive</label>
                                    </div>
                                </div>
                                <div className="well">
                                    <div className="form-row">
                                            <label for="autoFoodClassification">Auto Food Classification</label>
                                            <span class="label label-default">Default</span>
                                    </div>
                                    <div className="form-row">
                                        <fieldset>
                                            <label for="additionalFoodClassification">Additional Food Classification</label>
                                            <div>
                                                <input type="checkbox" id="Protein" name="feature" value="Protein" checked />
                                                <label for="Protein">Protein</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Dairy" name="feature"
                                                    value="Dairy" />
                                                <label for="Dairy">Dairy</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Bread" name="feature"
                                                    value="Bread" />
                                                <label for="Bread">Bread</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Pastry" name="feature"
                                                    value="Pastry" />
                                                <label for="Pastry">Pastry</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Fruits" name="feature"
                                                    value="Fruits" />
                                                <label for="Fruits">Fruits</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Vegetables" name="feature"
                                                    value="Vegetables" />
                                                <label for="Vegetables">Vegetables</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="Drinks" name="feature"
                                                    value="Drinks" />
                                                <label for="Drinks">Drinks</label>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div className="well">
                                    <label for="titleOfDonation">Estimated Fair Market Value</label>
                                    <input type="text" className="form-control" placeholder="$83" onChange={this.handleDonationEstimatedMarketValue} required />
                                    <label for="descriptionOfDonation">Weight in Pounds</label>
                                    <input type="text" className="form-control" placeholder="5 lbs" onChange={this.handleDonationGrossWeight} required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.donateNow.call(this,context)}>Donate Now</button>
                        </React.Fragment>
                    )}
                </DonorSignInContext.Consumer>
            </form>
            </div>          
        )
    }
}