import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCustomCard } from 'src/app/redux/actions/custom-card.action';
import { AppState } from 'src/app/redux/state.models';
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

  constructor(private store: Store<AppState>) {}

  createCard() {
    this.customCard.publishedAt = new Date().toISOString();
    this.store.dispatch(addCustomCard({ card: { ...this.customCard } }));
    // console.log('Create Card', this.customCard);
    this.customCard.title = '';
    this.customCard.description = '';
    this.customCard.imgURL = '';
    this.customCard.videoURL = '';
  }
}
