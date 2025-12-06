import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-mr',
  templateUrl: './dashboard-mr.component.html',
  styleUrls: ['./dashboard-mr.component.scss']
})
export class DashboardMrComponent implements OnInit {
  arr = [{
    title: 'Angular....',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque sunt mollitia quam voluptate
                    fugiat possimus
                    asperiores sapiente, temporibus magnam.`,
    id: 1
  },
  {
    title: 'Angular....',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque sunt mollitia quam voluptate
                    fugiat possimus
                    asperiores sapiente, temporibus magnam.`,
    id: 2
  },
  {
    title: 'Angular....',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque sunt mollitia quam voluptate
                    fugiat possimus
                    asperiores sapiente, temporibus magnam.`,
    id: 3
  },
  {
    title: 'Angular....',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque sunt mollitia quam voluptate
                    fugiat possimus
                    asperiores sapiente, temporibus magnam.`,
    id: 4
  },
  {
    title: 'Angular....',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque sunt mollitia quam voluptate
                    fugiat possimus
                    asperiores sapiente, temporibus magnam.`,
    id: 4
  },
  {
    title: 'Angular....',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque sunt mollitia quam voluptate
                    fugiat possimus
                    asperiores sapiente, temporibus magnam.`,
    id: 4
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
