import { Component, Renderer2, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) { }

  redirigirIndex() {
    this.router.navigate(['/index']);
  }

  ngOnInit(): void {
    const button = this.el.nativeElement.children[0]; // Accede al primer hijo de <body>
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");

    this.renderer.listen(button, 'click', (event) => {
      if (event.target.dataset.menustate === "closed") {
        this.renderer.setAttribute(event.target, 'data-menustate', 'open');
        this.renderer.setAttribute(nav, 'data-state', 'open');
        this.renderer.setAttribute(header, 'data-menustate', 'open');
      } else {
        this.renderer.setAttribute(event.target, 'data-menustate', 'closed');
        this.renderer.setAttribute(nav, 'data-state', 'closed');
        this.renderer.setAttribute(header, 'data-menustate', 'closed');
      }
    });
  }

}

