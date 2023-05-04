import { Component, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-character-box',
  templateUrl: './character-box.component.html',
  styleUrls: ['./character-box.component.css']
})
export class CharacterBoxComponent {
  @Input() characterId: number;

  character: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    const query = gql`
      query GetCharacter($id: Int!) {
        character(id: $id) {
          id
          name
          portraitUrl
          stats {
            strength
            dexterity
            constitution
            intelligence
            wisdom
            charisma
          }
        }
      }
    `;

    this.apollo.query({
      query,
      variables: {
        id: this.characterId
      }
    }).subscribe(result => {
      this.character = result.data.character;
    });
  }
}
