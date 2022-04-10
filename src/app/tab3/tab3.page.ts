import { Component } from '@angular/core';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
modes =['date','date-time','month','month-year','time','time-date','year'];
  selectedMode='date';

  showPicker = false;
dateValue = format(new Date(),'yyyy-MM-dd') + 'T09:00:00.000Z';
formattedString = '';
  constructor() {this.setToday();}
setToday(){
  this.formattedString = format(parseISO(format(new Date(),'yyyy-MM-dd')+ 'T09:00.000Z'),'HH:mm,MMM d, yyyy');
}
dateChanged(value){
this.dateValue =value;
this.formattedString = format(parseISO(value),'HH:mm,MMM d, yyyy');
this.showPicker =false;
}
}
