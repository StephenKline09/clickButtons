import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, HostBinding } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridTestComponent } from './grid-test/grid-test.component';
import { AuthorisedTopNavComponent } from './layout/authorised/authorised-top-nav/authorised-top-nav.component';
import { AuthorisedSideNavComponent } from './layout/authorised/authorised-side-nav/authorised-side-nav.component';
import { MovieTheaterComponent } from './movie-theater/movie-theater.component';
import { StickFightVideoComponent } from './movie-theater-videos/stick-fight-video/stick-fight-video.component';
import { PolyphiaVideoComponent } from './movie-theater-videos/polyphia-video/polyphia-video.component';
import { DeadpoolBobRossVideoComponent } from './movie-theater-videos/deadpool-bob-ross-video/deadpool-bob-ross-video.component';
import { FullHouseVideoComponent } from './movie-theater-videos/full-house-video/full-house-video.component';
import { YouCanDoAnythingVideoComponent } from './movie-theater-videos/you-can-do-anything-video/you-can-do-anything-video.component';
import { MythbustersVideoComponent } from './movie-theater-videos/mythbusters-video/mythbusters-video.component';
import { BetterStickFightVideoComponent } from './movie-theater-videos/better-stick-fight-video/better-stick-fight-video.component';
import { RedPandasVideoComponent } from './movie-theater-videos/red-pandas-video/red-pandas-video.component';
import { LofiMusicVideoComponent } from './lofi-music-video/lofi-music-video.component';
import { BackgroundVideoButtonComponent } from './background-video-button/background-video-button.component';
import { AnotherStickFightVideoComponent } from './movie-theater-videos/another-stick-fight-video/another-stick-fight-video.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CalculatorAppComponent } from './calculator-app/calculator-app.component';
import { GameroomAppComponent } from './gameroom-app/gameroom-app.component';
import { TicTacToeGameComponent } from './tic-tac-toe-game/tic-tac-toe-game.component';
import { SnowboardingVideoComponent } from './movie-theater-videos/snowboarding-video/snowboarding-video.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { TetrisGameComponent } from './tetris-game/tetris-game.component';
import { HangmanGameComponent } from './hangman-game/hangman-game.component';
import { TranslatorAppComponent } from './translator-app/translator-app.component';
// import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    GridTestComponent,
    AuthorisedTopNavComponent,
    AuthorisedSideNavComponent,
    MovieTheaterComponent,
    StickFightVideoComponent,
    PolyphiaVideoComponent,
    DeadpoolBobRossVideoComponent,
    FullHouseVideoComponent,
    YouCanDoAnythingVideoComponent,
    MythbustersVideoComponent,
    BetterStickFightVideoComponent,
    RedPandasVideoComponent,
    LofiMusicVideoComponent,
    BackgroundVideoButtonComponent,
    AnotherStickFightVideoComponent,
    LandingPageComponent,
    CalculatorAppComponent,
    GameroomAppComponent,
    TicTacToeGameComponent,
    SnowboardingVideoComponent,
    SnakeGameComponent,
    TetrisGameComponent,
    HangmanGameComponent,
    TranslatorAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    // YouTubePlayerModule,
    // YouTubePlayer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
