import { Component, OnInit } from '@angular/core';
import { SensorsStorageDataService } from 'src/app/core/service/sensors-storage-data.service';
import { LiveData } from 'src/app/types/live-data.types';

@Component({
  selector: 'app-resume-main',
  templateUrl: './resume-main.component.html',
  styleUrls: ['./resume-main.component.scss']
})
export class ResumeMainComponent implements OnInit {
  datas:LiveData[]=[];
  liveData: LiveData = {} as LiveData;

  constructor(private sensorsStorageDataService: SensorsStorageDataService) {}

  ngOnInit(): void {
    this.sensorsStorageDataService.getLiveData().subscribe(res => {
        this.datas=res;
      this.liveData = this.datas[this.datas.length-1];
        console.log(this.liveData)
    });
  }

}
