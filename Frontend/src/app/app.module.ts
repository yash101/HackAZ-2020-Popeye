import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule, MatFormFieldModule, MatSliderModule, MatCardModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { UploadResumeComponent } from './upload-resume/upload-resume.component';
import { FormsModule } from '@angular/forms';
import { TagPickerComponent } from './tag-picker/tag-picker.component';
import { TagComponent } from './tag/tag.component';
import { DescriptionEntrComponent } from './description-entr/description-entr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    SearchResultsComponent,
    CandidateProfileComponent,
    UploadResumeComponent,
    TagPickerComponent,
    TagComponent,
    DescriptionEntrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
