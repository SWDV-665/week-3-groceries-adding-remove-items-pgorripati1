import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title= "Grocery List";
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
  removeItem(item, index){
    const toast = this.toastCtrl.create({
      message: 'Removing Item number '+ index,
      duration: 3000 }
    );
    toast.present();
    this.items.splice(index, 1);
  }
  addItem(){
    console.log("Adding Item");
   this.showAddItemPromt();
  }
  showAddItemPromt(){
    const promt = this.alertCtrl.create({
      title: "Add item",
      message: "Please enter item details",
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
