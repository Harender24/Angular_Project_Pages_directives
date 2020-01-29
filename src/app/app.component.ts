import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'white boat on blue ocean water',
      url: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white canoe near palm tree',
      url: 'https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'red and blue house near dock',
      url: 'https://images.unsplash.com/photo-1490162190997-391cff4632e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'short-coated brown dog near seashore',
      url: 'https://images.unsplash.com/photo-1555696972-863afbc72bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white boat on blue ocean water',
      url: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white canoe near palm tree',
      url: 'https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'red and blue house near dock',
      url: 'https://images.unsplash.com/photo-1490162190997-391cff4632e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'short-coated brown dog near seashore',
      url: 'https://images.unsplash.com/photo-1555696972-863afbc72bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white boat on blue ocean water',
      url: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white canoe near palm tree',
      url: 'https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'red and blue house near dock',
      url: 'https://images.unsplash.com/photo-1490162190997-391cff4632e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'short-coated brown dog near seashore',
      url: 'https://images.unsplash.com/photo-1555696972-863afbc72bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white boat on blue ocean water',
      url: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white canoe near palm tree',
      url: 'https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'red and blue house near dock',
      url: 'https://images.unsplash.com/photo-1490162190997-391cff4632e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'short-coated brown dog near seashore',
      url: 'https://images.unsplash.com/photo-1555696972-863afbc72bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white boat on blue ocean water',
      url: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white canoe near palm tree',
      url: 'https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'red and blue house near dock',
      url: 'https://images.unsplash.com/photo-1490162190997-391cff4632e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'short-coated brown dog near seashore',
      url: 'https://images.unsplash.com/photo-1555696972-863afbc72bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white boat on blue ocean water',
      url: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'white canoe near palm tree',
      url: 'https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'red and blue house near dock',
      url: 'https://images.unsplash.com/photo-1490162190997-391cff4632e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'short-coated brown dog near seashore',
      url: 'https://images.unsplash.com/photo-1555696972-863afbc72bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }

  ]
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
