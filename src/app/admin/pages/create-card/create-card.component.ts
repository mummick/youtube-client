import { Component } from '@angular/core';
import { StateCustomCard } from 'src/app/shared/models/custom-card.models';

const defaultCard: StateCustomCard = {
  title: '',
  description: '',
  imgURL: '',
  videoURL: '',
  publishedAt: new Date().toISOString(),
};

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  public customCard: StateCustomCard = defaultCard;

  createCard() {
    this.customCard.publishedAt = new Date().toISOString();
    // console.log('Create Card', this.customCard);
    this.customCard.title = '';
    this.customCard.description = '';
    this.customCard.imgURL = '';
    this.customCard.videoURL = '';
  }
}
