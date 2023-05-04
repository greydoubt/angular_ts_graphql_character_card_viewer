import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloClientOptions, InMemoryCache, ApolloLink, HttpLink } from 'apollo-client';
import { ApolloModule, Apollo } from 'apollo-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterBoxComponent } from './character-box/character-box.component';

const uri = 'http://localhost:4000/graphql';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({ uri });

  const authLink = new ApolloLink((operation, forward) => {
    // Add your authentication logic here
    return forward(operation);
  });

  return {
    link: authLink.concat(http),
    cache: new InMemoryCache()
  };
}

@NgModule({
  declarations: [
    AppComponent,
    CharacterBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ApolloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo
