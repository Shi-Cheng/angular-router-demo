import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log('得到了订阅的路由参数.');
      console.log(data);
    })
  }

  goBack(): void {
    this.router.navigateByUrl('device')
  }
  
}
