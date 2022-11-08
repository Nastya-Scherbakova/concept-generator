import { HttpService } from './services/http.service';
import { ArtRef } from './models/artRef';
import { JsonReaderService } from './services/json-reader.service';
import { Component } from '@angular/core';
import { NbMenuItem, NbToastrService, NbComponentStatus  } from '@nebular/theme';
import { GeneratorResult } from './models/generatorResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Concept Idea Generator';
  fieldsFileName = 'fields';
  refsFileName = 'refs';
  fields = [];
  generatorResults: any = {};
  imageResults: any = {};
  refs: ArtRef[] = [];
  searchImg = false;
  items: NbMenuItem[] = [
    {
      title: 'Character',
      icon: 'person-outline',
    },
    {
      title: 'Prop (coming soon...)',
      icon: 'cube-outline',
    }
  ];



  constructor(private json: JsonReaderService, private http: HttpService, private toastrService: NbToastrService) {
    this.fields.forEach(field=>{
      this.generatorResults[field] = '';
    });
    json.getJSON(this.fieldsFileName).subscribe((fields) => {
      this.fields = fields;
    });
    json.getJSON(this.refsFileName).subscribe((refs) => {
      this.refs = refs;
    });
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }



  generateAll(){
    this.fields.forEach(field => {
      this.generateField(field);
    });
  }

  generateField(field: string) {
    this.json.getJSON(field).subscribe((fieldDictionary)=>{
      let rand = Math.floor(Math.random() * fieldDictionary.length);
     // let neededObj = this.generatorResults.find(el=>el.field == field) || new GeneratorResult();

      this.generatorResults[field] = fieldDictionary[rand];
      this.toastrService.show('New '+ field + ' generated' , field + ': ' + this.generatorResults[field], {status: 'success'});
    });
  }
}
