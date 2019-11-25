import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  /*title = "Find your pet!";
  lat: number;
  lng: number;*/
  map:any;
  latitude:number = 24.026437;
  longitude:number = -104.666607;
  coordenadas:any;
  latlng:any;
  private pets;

  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public database: AngularFireDatabase) {

             // this.coordenadas = firebase.database().ref('/coords');
              
            
                // this.getData();
              
              }
    getData(){

      this.database.list('coords/').valueChanges().subscribe(
        data => {
          console.log(data);
          this.pets = data;
        });

    }

    ionViewDidLoad(){
      this.getData();
      this.map=this.loadMap();
    }

    loadMap(){
      console.log('loadMap');
      //const latLng = new google.maps.LatLng(, );
      console.log("Afuera "+this.pets);
      
      var myLatLng = {lat: this.latitude, lng: this.longitude};
     
     

      var map = new google.maps.Map(this.mapElement.nativeElement,{
        zoom:14,
        center:{ lat:this.latitude, lng: this.longitude},
        disableDefaultUI: false,
        mapTypeControl: false,
        scaleControl:true,
        streetViewControl:true,
        fullscreenControl:false,
        zoomControl:true,
      });

      /*let posicion = this.coordenadas.childData;

      console.log("esto "+posicion);*/

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Aquí esta tu mascota'
      });
      marker.setMap(map);
      
      return map;
        
    }


    
    

 

 
}
