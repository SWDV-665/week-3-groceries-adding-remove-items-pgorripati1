import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Title for the App
  title= "Grocery List";
  //Initial list of items for the App on start up
  items=[
    {
      name: "Milk",
      quantity: 1
  },
  {
    name: "Eggs",
    quantity:12
  },
  {
    name: "Banana",
    quantity:6
  },
  {
    name: "Salt",
    quantity:1
  }
];
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }
  //Action for Remove items functionality - removeItem()
  removeItem(item, index){
    const toast = this.toastCtrl.create({
      message: 'Removing Item number '+ index,
      duration: 3000 }
    );
    toast.present();
    this.items.splice(index, 1);
  }
  //Action for Add item functionality - addItem()
  addItem(){
    console.log("Adding Item");
   this.showAddItemPromt();
  }
  //Promt controller method for Add item action - showAddItemPromt()
  showAddItemPromt(){
    const promt = this.alertCtrl.create({
      //Title for Promt
      title: "Add item",
      //Promt intro message
      message: "Please enter item details",
      //Promt Input elements
      inputs:[
        {
          name:'name',
          placeholder: 'Name'
        },
        {
          name:'quantity',
          placeholder:'Quantity'
        },
      ],
      //Promt Button elements
      buttons:[
        {
          text:'Cancel',
          handler: data=>{

          }
        },
        {
          text:'Save',
          handler: item=>{
            this.items.push(item);
            
          }
        }
      ]

    });
    promt.present();
  }

}
