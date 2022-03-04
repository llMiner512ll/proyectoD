import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-accion',
  templateUrl: './accion.page.html',
  styleUrls: ['./accion.page.scss'],
})
export class AccionPage implements OnInit {

  ngOnInit() {
  }
  constructor(public actionSheetController: ActionSheetController) {}

async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Albums',
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      id: 'delete-button',
      data: {
        type: 'delete'
      },
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share',
      cssClass: 'azul',
      data: 10,
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Play (open modal)',
      icon: 'caret-forward-circle',
      data: 'Data value',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorite',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}
}
