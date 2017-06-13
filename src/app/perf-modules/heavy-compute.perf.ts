import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-heavy-compute',
  template: `

<div class="galaxy">
  <input type="checkbox" id="mars"/>
  <label class="planet planet__mars" for="mars"></label>
  <div class="cloud">
    <div class="cluster">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
  </div>
</div>
    `,
  styles: [`

.galaxy {
  background-color: #111117;
  width: 100%;
  height: 500px;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-perspective: 5000px;
          perspective: 5000px;
}

input {
  display: none;
}

@-webkit-keyframes pulse {
  from {
    box-shadow: 0 0 20px #ff6432;
  }
  to {
    box-shadow: 0 0 50px #ff6432;
  }
}

@keyframes pulse {
  from {
    box-shadow: 0 0 20px #ff6432;
  }
  to {
    box-shadow: 0 0 50px #ff6432;
  }
}
.planet__mars {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background-color: black;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-perspective: 1000px;
          perspective: 1000px;
  -webkit-transform: scale(0.5);
          transform: scale(0.5);
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-transition: -webkit-transform 4s;
  transition: -webkit-transform 4s;
  transition: transform 4s;
  transition: transform 4s, -webkit-transform 4s;
  -webkit-animation: pulse 3s linear infinite alternate;
          animation: pulse 3s linear infinite alternate;
}
.planet__mars::after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  /* background-color: rgba(255,255,255,1); */
  background-image: url("http://mepag.jpl.nasa.gov/hightlight_images/mars2_115916c.jpg");
  background-size: auto 100%;
  background-position: center;
}
input:checked + .planet__mars {
  -webkit-transform: scale(1.5);
          transform: scale(1.5);
}

.cloud {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: scale(0.3) translate(-50%, -50%);
          transform: scale(0.3) translate(-50%, -50%);
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 4s;
  transition: -webkit-transform 4s;
  transition: transform 4s;
  transition: transform 4s, -webkit-transform 4s;
}
input:checked ~ .cloud {
  -webkit-transform: scale(0.5) translate(-50%, -50%);
          transform: scale(0.5) translate(-50%, -50%);
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotateY(0) rotateX(0);
            transform: rotateY(0) rotateX(0);
  }
  to {
    -webkit-transform: rotateY(-360deg) rotateX(360deg);
            transform: rotateY(-360deg) rotateX(360deg);
  }
}

@keyframes rotation {
  from {
    -webkit-transform: rotateY(0) rotateX(0);
            transform: rotateY(0) rotateX(0);
  }
  to {
    -webkit-transform: rotateY(-360deg) rotateX(360deg);
            transform: rotateY(-360deg) rotateX(360deg);
  }
}
.cluster {
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-perspective: 5000px;
          perspective: 5000px;
  -webkit-animation: rotation 240s linear infinite;
          animation: rotation 240s linear infinite;
}

.star {
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.star, .star::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
}
.star::before {
  content: "";
  -webkit-transform: rotateY(-90deg);
          transform: rotateY(-90deg);
}

.star:nth-child(1) {
  -webkit-transform: translate3d(-1321px, 753px, 1871px);
          transform: translate3d(-1321px, 753px, 1871px);
}

.star:nth-child(2) {
  -webkit-transform: translate3d(-1387px, -778px, 4px);
          transform: translate3d(-1387px, -778px, 4px);
}

.star:nth-child(3) {
  -webkit-transform: translate3d(483px, -1532px, 1878px);
          transform: translate3d(483px, -1532px, 1878px);
}

.star:nth-child(4) {
  -webkit-transform: translate3d(-1516px, 974px, -1069px);
          transform: translate3d(-1516px, 974px, -1069px);
}

.star:nth-child(5) {
  -webkit-transform: translate3d(-1146px, 753px, -128px);
          transform: translate3d(-1146px, 753px, -128px);
}

.star:nth-child(6) {
  -webkit-transform: translate3d(-1620px, -1165px, -79px);
          transform: translate3d(-1620px, -1165px, -79px);
}

.star:nth-child(7) {
  -webkit-transform: translate3d(929px, 1796px, -1877px);
          transform: translate3d(929px, 1796px, -1877px);
}

.star:nth-child(8) {
  -webkit-transform: translate3d(1251px, -411px, 610px);
          transform: translate3d(1251px, -411px, 610px);
}

.star:nth-child(9) {
  -webkit-transform: translate3d(-231px, -137px, -1613px);
          transform: translate3d(-231px, -137px, -1613px);
}

.star:nth-child(10) {
  -webkit-transform: translate3d(-738px, -1448px, 865px);
          transform: translate3d(-738px, -1448px, 865px);
}

.star:nth-child(11) {
  -webkit-transform: translate3d(-1593px, -1605px, -1052px);
          transform: translate3d(-1593px, -1605px, -1052px);
}

.star:nth-child(12) {
  -webkit-transform: translate3d(-433px, -1377px, -465px);
          transform: translate3d(-433px, -1377px, -465px);
}

.star:nth-child(13) {
  -webkit-transform: translate3d(1533px, -1708px, 1806px);
          transform: translate3d(1533px, -1708px, 1806px);
}

.star:nth-child(14) {
  -webkit-transform: translate3d(-381px, -814px, -1503px);
          transform: translate3d(-381px, -814px, -1503px);
}

.star:nth-child(15) {
  -webkit-transform: translate3d(-360px, -1202px, -1554px);
          transform: translate3d(-360px, -1202px, -1554px);
}

.star:nth-child(16) {
  -webkit-transform: translate3d(965px, 1415px, -810px);
          transform: translate3d(965px, 1415px, -810px);
}

.star:nth-child(17) {
  -webkit-transform: translate3d(-1352px, 281px, 594px);
          transform: translate3d(-1352px, 281px, 594px);
}

.star:nth-child(18) {
  -webkit-transform: translate3d(-732px, -750px, -461px);
          transform: translate3d(-732px, -750px, -461px);
}

.star:nth-child(19) {
  -webkit-transform: translate3d(-1081px, -358px, 494px);
          transform: translate3d(-1081px, -358px, 494px);
}

.star:nth-child(20) {
  -webkit-transform: translate3d(-1922px, -736px, -1390px);
          transform: translate3d(-1922px, -736px, -1390px);
}

.star:nth-child(21) {
  -webkit-transform: translate3d(52px, 1654px, 728px);
          transform: translate3d(52px, 1654px, 728px);
}

.star:nth-child(22) {
  -webkit-transform: translate3d(-1110px, 601px, -568px);
          transform: translate3d(-1110px, 601px, -568px);
}

.star:nth-child(23) {
  -webkit-transform: translate3d(-417px, -1670px, -353px);
          transform: translate3d(-417px, -1670px, -353px);
}

.star:nth-child(24) {
  -webkit-transform: translate3d(459px, 1379px, -1435px);
          transform: translate3d(459px, 1379px, -1435px);
}

.star:nth-child(25) {
  -webkit-transform: translate3d(265px, 581px, -1632px);
          transform: translate3d(265px, 581px, -1632px);
}

.star:nth-child(26) {
  -webkit-transform: translate3d(-786px, 1628px, -928px);
          transform: translate3d(-786px, 1628px, -928px);
}

.star:nth-child(27) {
  -webkit-transform: translate3d(1930px, -1607px, -5px);
          transform: translate3d(1930px, -1607px, -5px);
}

.star:nth-child(28) {
  -webkit-transform: translate3d(656px, -316px, -1056px);
          transform: translate3d(656px, -316px, -1056px);
}

.star:nth-child(29) {
  -webkit-transform: translate3d(672px, 864px, -667px);
          transform: translate3d(672px, 864px, -667px);
}

.star:nth-child(30) {
  -webkit-transform: translate3d(-1656px, -1407px, -538px);
          transform: translate3d(-1656px, -1407px, -538px);
}

.star:nth-child(31) {
  -webkit-transform: translate3d(-1020px, -323px, -1862px);
          transform: translate3d(-1020px, -323px, -1862px);
}

.star:nth-child(32) {
  -webkit-transform: translate3d(1112px, 929px, -767px);
          transform: translate3d(1112px, 929px, -767px);
}

.star:nth-child(33) {
  -webkit-transform: translate3d(-848px, 821px, 884px);
          transform: translate3d(-848px, 821px, 884px);
}

.star:nth-child(34) {
  -webkit-transform: translate3d(-1815px, 920px, -451px);
          transform: translate3d(-1815px, 920px, -451px);
}

.star:nth-child(35) {
  -webkit-transform: translate3d(-1239px, 603px, -1865px);
          transform: translate3d(-1239px, 603px, -1865px);
}

.star:nth-child(36) {
  -webkit-transform: translate3d(-1010px, 1927px, 1528px);
          transform: translate3d(-1010px, 1927px, 1528px);
}

.star:nth-child(37) {
  -webkit-transform: translate3d(74px, 985px, -639px);
          transform: translate3d(74px, 985px, -639px);
}

.star:nth-child(38) {
  -webkit-transform: translate3d(1378px, 1824px, -954px);
          transform: translate3d(1378px, 1824px, -954px);
}

.star:nth-child(39) {
  -webkit-transform: translate3d(1085px, -1506px, -925px);
          transform: translate3d(1085px, -1506px, -925px);
}

.star:nth-child(40) {
  -webkit-transform: translate3d(1125px, 1802px, -1754px);
          transform: translate3d(1125px, 1802px, -1754px);
}

.star:nth-child(41) {
  -webkit-transform: translate3d(250px, -708px, 900px);
          transform: translate3d(250px, -708px, 900px);
}

.star:nth-child(42) {
  -webkit-transform: translate3d(-353px, 390px, 1461px);
          transform: translate3d(-353px, 390px, 1461px);
}

.star:nth-child(43) {
  -webkit-transform: translate3d(-1440px, -1261px, -1793px);
          transform: translate3d(-1440px, -1261px, -1793px);
}

.star:nth-child(44) {
  -webkit-transform: translate3d(-1552px, -1703px, 1996px);
          transform: translate3d(-1552px, -1703px, 1996px);
}

.star:nth-child(45) {
  -webkit-transform: translate3d(-1970px, -1406px, -1873px);
          transform: translate3d(-1970px, -1406px, -1873px);
}

.star:nth-child(46) {
  -webkit-transform: translate3d(908px, 1730px, -564px);
          transform: translate3d(908px, 1730px, -564px);
}

.star:nth-child(47) {
  -webkit-transform: translate3d(874px, -1023px, 824px);
          transform: translate3d(874px, -1023px, 824px);
}

.star:nth-child(48) {
  -webkit-transform: translate3d(810px, -749px, 861px);
          transform: translate3d(810px, -749px, 861px);
}

.star:nth-child(49) {
  -webkit-transform: translate3d(-1004px, 245px, 1915px);
          transform: translate3d(-1004px, 245px, 1915px);
}

.star:nth-child(50) {
  -webkit-transform: translate3d(-1033px, -621px, 793px);
          transform: translate3d(-1033px, -621px, 793px);
}

.star:nth-child(51) {
  -webkit-transform: translate3d(-1149px, -849px, -598px);
          transform: translate3d(-1149px, -849px, -598px);
}

.star:nth-child(52) {
  -webkit-transform: translate3d(627px, 50px, -276px);
          transform: translate3d(627px, 50px, -276px);
}

.star:nth-child(53) {
  -webkit-transform: translate3d(904px, 1919px, 787px);
          transform: translate3d(904px, 1919px, 787px);
}

.star:nth-child(54) {
  -webkit-transform: translate3d(-721px, 580px, -663px);
          transform: translate3d(-721px, 580px, -663px);
}

.star:nth-child(55) {
  -webkit-transform: translate3d(1032px, 947px, -1887px);
          transform: translate3d(1032px, 947px, -1887px);
}

.star:nth-child(56) {
  -webkit-transform: translate3d(-988px, -1439px, -1945px);
          transform: translate3d(-988px, -1439px, -1945px);
}

.star:nth-child(57) {
  -webkit-transform: translate3d(-180px, -895px, 840px);
          transform: translate3d(-180px, -895px, 840px);
}

.star:nth-child(58) {
  -webkit-transform: translate3d(-506px, 1110px, -1326px);
          transform: translate3d(-506px, 1110px, -1326px);
}

.star:nth-child(59) {
  -webkit-transform: translate3d(1879px, 1251px, -730px);
          transform: translate3d(1879px, 1251px, -730px);
}

.star:nth-child(60) {
  -webkit-transform: translate3d(-1440px, 591px, -917px);
          transform: translate3d(-1440px, 591px, -917px);
}

.star:nth-child(61) {
  -webkit-transform: translate3d(-812px, -148px, 918px);
          transform: translate3d(-812px, -148px, 918px);
}

.star:nth-child(62) {
  -webkit-transform: translate3d(-703px, 1541px, 206px);
          transform: translate3d(-703px, 1541px, 206px);
}

.star:nth-child(63) {
  -webkit-transform: translate3d(-1866px, -330px, -346px);
          transform: translate3d(-1866px, -330px, -346px);
}

.star:nth-child(64) {
  -webkit-transform: translate3d(1922px, -849px, 1050px);
          transform: translate3d(1922px, -849px, 1050px);
}

.star:nth-child(65) {
  -webkit-transform: translate3d(463px, 47px, -1588px);
          transform: translate3d(463px, 47px, -1588px);
}

.star:nth-child(66) {
  -webkit-transform: translate3d(-1212px, 1103px, 836px);
          transform: translate3d(-1212px, 1103px, 836px);
}

.star:nth-child(67) {
  -webkit-transform: translate3d(1806px, -429px, 38px);
          transform: translate3d(1806px, -429px, 38px);
}

.star:nth-child(68) {
  -webkit-transform: translate3d(1548px, -1791px, -149px);
          transform: translate3d(1548px, -1791px, -149px);
}

.star:nth-child(69) {
  -webkit-transform: translate3d(480px, -462px, -1915px);
          transform: translate3d(480px, -462px, -1915px);
}

.star:nth-child(70) {
  -webkit-transform: translate3d(890px, -107px, -239px);
          transform: translate3d(890px, -107px, -239px);
}

.star:nth-child(71) {
  -webkit-transform: translate3d(1793px, 903px, 106px);
          transform: translate3d(1793px, 903px, 106px);
}

.star:nth-child(72) {
  -webkit-transform: translate3d(774px, 29px, 1386px);
          transform: translate3d(774px, 29px, 1386px);
}

.star:nth-child(73) {
  -webkit-transform: translate3d(-1533px, -1019px, -217px);
          transform: translate3d(-1533px, -1019px, -217px);
}

.star:nth-child(74) {
  -webkit-transform: translate3d(1072px, -1184px, 1028px);
          transform: translate3d(1072px, -1184px, 1028px);
}

.star:nth-child(75) {
  -webkit-transform: translate3d(-1208px, 1619px, 1969px);
          transform: translate3d(-1208px, 1619px, 1969px);
}

.star:nth-child(76) {
  -webkit-transform: translate3d(-1347px, -1653px, 654px);
          transform: translate3d(-1347px, -1653px, 654px);
}

.star:nth-child(77) {
  -webkit-transform: translate3d(-1013px, 723px, -295px);
          transform: translate3d(-1013px, 723px, -295px);
}

.star:nth-child(78) {
  -webkit-transform: translate3d(329px, 450px, -992px);
          transform: translate3d(329px, 450px, -992px);
}

.star:nth-child(79) {
  -webkit-transform: translate3d(-1229px, 953px, 466px);
          transform: translate3d(-1229px, 953px, 466px);
}

.star:nth-child(80) {
  -webkit-transform: translate3d(-1807px, 998px, -1587px);
          transform: translate3d(-1807px, 998px, -1587px);
}

.star:nth-child(81) {
  -webkit-transform: translate3d(-1966px, -1683px, 24px);
          transform: translate3d(-1966px, -1683px, 24px);
}

.star:nth-child(82) {
  -webkit-transform: translate3d(64px, 1942px, 3px);
          transform: translate3d(64px, 1942px, 3px);
}

.star:nth-child(83) {
  -webkit-transform: translate3d(1856px, -1805px, -599px);
          transform: translate3d(1856px, -1805px, -599px);
}

.star:nth-child(84) {
  -webkit-transform: translate3d(288px, 1643px, 1571px);
          transform: translate3d(288px, 1643px, 1571px);
}

.star:nth-child(85) {
  -webkit-transform: translate3d(-1368px, 73px, -1973px);
          transform: translate3d(-1368px, 73px, -1973px);
}

.star:nth-child(86) {
  -webkit-transform: translate3d(-1626px, -501px, 1994px);
          transform: translate3d(-1626px, -501px, 1994px);
}

.star:nth-child(87) {
  -webkit-transform: translate3d(933px, 341px, 1697px);
          transform: translate3d(933px, 341px, 1697px);
}

.star:nth-child(88) {
  -webkit-transform: translate3d(-422px, 218px, 1683px);
          transform: translate3d(-422px, 218px, 1683px);
}

.star:nth-child(89) {
  -webkit-transform: translate3d(-465px, 1829px, 1311px);
          transform: translate3d(-465px, 1829px, 1311px);
}

.star:nth-child(90) {
  -webkit-transform: translate3d(-1568px, -245px, 1978px);
          transform: translate3d(-1568px, -245px, 1978px);
}

.star:nth-child(91) {
  -webkit-transform: translate3d(1440px, -1409px, 641px);
          transform: translate3d(1440px, -1409px, 641px);
}

.star:nth-child(92) {
  -webkit-transform: translate3d(-1929px, 1943px, 1203px);
          transform: translate3d(-1929px, 1943px, 1203px);
}

.star:nth-child(93) {
  -webkit-transform: translate3d(-1402px, -848px, 95px);
          transform: translate3d(-1402px, -848px, 95px);
}

.star:nth-child(94) {
  -webkit-transform: translate3d(252px, -682px, -684px);
          transform: translate3d(252px, -682px, -684px);
}

.star:nth-child(95) {
  -webkit-transform: translate3d(819px, 1760px, -673px);
          transform: translate3d(819px, 1760px, -673px);
}

.star:nth-child(96) {
  -webkit-transform: translate3d(-37px, 1002px, 290px);
          transform: translate3d(-37px, 1002px, 290px);
}

.star:nth-child(97) {
  -webkit-transform: translate3d(756px, 1759px, -1584px);
          transform: translate3d(756px, 1759px, -1584px);
}

.star:nth-child(98) {
  -webkit-transform: translate3d(-1291px, -809px, 1438px);
          transform: translate3d(-1291px, -809px, 1438px);
}

.star:nth-child(99) {
  -webkit-transform: translate3d(-1041px, 171px, 475px);
          transform: translate3d(-1041px, 171px, 475px);
}

.star:nth-child(100) {
  -webkit-transform: translate3d(635px, -1432px, -1309px);
          transform: translate3d(635px, -1432px, -1309px);
}

.star:nth-child(101) {
  -webkit-transform: translate3d(1776px, -1837px, 1794px);
          transform: translate3d(1776px, -1837px, 1794px);
}

.star:nth-child(102) {
  -webkit-transform: translate3d(1551px, -1148px, 146px);
          transform: translate3d(1551px, -1148px, 146px);
}

.star:nth-child(103) {
  -webkit-transform: translate3d(-1545px, 690px, 1964px);
          transform: translate3d(-1545px, 690px, 1964px);
}

.star:nth-child(104) {
  -webkit-transform: translate3d(697px, 1010px, 202px);
          transform: translate3d(697px, 1010px, 202px);
}

.star:nth-child(105) {
  -webkit-transform: translate3d(202px, 1224px, -1895px);
          transform: translate3d(202px, 1224px, -1895px);
}

.star:nth-child(106) {
  -webkit-transform: translate3d(-304px, -1879px, -1623px);
          transform: translate3d(-304px, -1879px, -1623px);
}

.star:nth-child(107) {
  -webkit-transform: translate3d(622px, 1682px, -1424px);
          transform: translate3d(622px, 1682px, -1424px);
}

.star:nth-child(108) {
  -webkit-transform: translate3d(-279px, -1255px, -18px);
          transform: translate3d(-279px, -1255px, -18px);
}

.star:nth-child(109) {
  -webkit-transform: translate3d(509px, 886px, 1978px);
          transform: translate3d(509px, 886px, 1978px);
}

.star:nth-child(110) {
  -webkit-transform: translate3d(-856px, -1818px, -1242px);
          transform: translate3d(-856px, -1818px, -1242px);
}

.star:nth-child(111) {
  -webkit-transform: translate3d(-1343px, 761px, -1178px);
          transform: translate3d(-1343px, 761px, -1178px);
}

.star:nth-child(112) {
  -webkit-transform: translate3d(27px, -187px, 1505px);
          transform: translate3d(27px, -187px, 1505px);
}

.star:nth-child(113) {
  -webkit-transform: translate3d(1920px, -1988px, 1346px);
          transform: translate3d(1920px, -1988px, 1346px);
}

.star:nth-child(114) {
  -webkit-transform: translate3d(-574px, 1773px, 298px);
          transform: translate3d(-574px, 1773px, 298px);
}

.star:nth-child(115) {
  -webkit-transform: translate3d(1205px, 1234px, 957px);
          transform: translate3d(1205px, 1234px, 957px);
}

.star:nth-child(116) {
  -webkit-transform: translate3d(551px, -81px, 902px);
          transform: translate3d(551px, -81px, 902px);
}

.star:nth-child(117) {
  -webkit-transform: translate3d(1598px, 1596px, 1715px);
          transform: translate3d(1598px, 1596px, 1715px);
}

.star:nth-child(118) {
  -webkit-transform: translate3d(1284px, 92px, 1932px);
          transform: translate3d(1284px, 92px, 1932px);
}

.star:nth-child(119) {
  -webkit-transform: translate3d(-904px, 1011px, 1054px);
          transform: translate3d(-904px, 1011px, 1054px);
}

.star:nth-child(120) {
  -webkit-transform: translate3d(-683px, 603px, 390px);
          transform: translate3d(-683px, 603px, 390px);
}

.star:nth-child(121) {
  -webkit-transform: translate3d(-1453px, 113px, -826px);
          transform: translate3d(-1453px, 113px, -826px);
}

.star:nth-child(122) {
  -webkit-transform: translate3d(1093px, -1967px, 1296px);
          transform: translate3d(1093px, -1967px, 1296px);
}

.star:nth-child(123) {
  -webkit-transform: translate3d(-1510px, 1393px, 1914px);
          transform: translate3d(-1510px, 1393px, 1914px);
}

.star:nth-child(124) {
  -webkit-transform: translate3d(1038px, 108px, 1011px);
          transform: translate3d(1038px, 108px, 1011px);
}

.star:nth-child(125) {
  -webkit-transform: translate3d(-806px, 1023px, -925px);
          transform: translate3d(-806px, 1023px, -925px);
}

.star:nth-child(126) {
  -webkit-transform: translate3d(-1373px, -1088px, 1924px);
          transform: translate3d(-1373px, -1088px, 1924px);
}

.star:nth-child(127) {
  -webkit-transform: translate3d(-1339px, 135px, 560px);
          transform: translate3d(-1339px, 135px, 560px);
}

.star:nth-child(128) {
  -webkit-transform: translate3d(-799px, 1386px, -1784px);
          transform: translate3d(-799px, 1386px, -1784px);
}

.star:nth-child(129) {
  -webkit-transform: translate3d(-282px, -1573px, -1962px);
          transform: translate3d(-282px, -1573px, -1962px);
}

.star:nth-child(130) {
  -webkit-transform: translate3d(1357px, 466px, -249px);
          transform: translate3d(1357px, 466px, -249px);
}

.star:nth-child(131) {
  -webkit-transform: translate3d(1719px, -727px, -63px);
          transform: translate3d(1719px, -727px, -63px);
}

.star:nth-child(132) {
  -webkit-transform: translate3d(660px, 359px, -342px);
          transform: translate3d(660px, 359px, -342px);
}

.star:nth-child(133) {
  -webkit-transform: translate3d(-1320px, -274px, -1523px);
          transform: translate3d(-1320px, -274px, -1523px);
}

.star:nth-child(134) {
  -webkit-transform: translate3d(-587px, -1416px, -1562px);
          transform: translate3d(-587px, -1416px, -1562px);
}

.star:nth-child(135) {
  -webkit-transform: translate3d(-124px, 478px, -747px);
          transform: translate3d(-124px, 478px, -747px);
}

.star:nth-child(136) {
  -webkit-transform: translate3d(-760px, -1471px, 601px);
          transform: translate3d(-760px, -1471px, 601px);
}

.star:nth-child(137) {
  -webkit-transform: translate3d(322px, 1242px, 1013px);
          transform: translate3d(322px, 1242px, 1013px);
}

.star:nth-child(138) {
  -webkit-transform: translate3d(1043px, -871px, 1448px);
          transform: translate3d(1043px, -871px, 1448px);
}

.star:nth-child(139) {
  -webkit-transform: translate3d(-641px, 1343px, 540px);
          transform: translate3d(-641px, 1343px, 540px);
}

.star:nth-child(140) {
  -webkit-transform: translate3d(-72px, 1107px, -1711px);
          transform: translate3d(-72px, 1107px, -1711px);
}

.star:nth-child(141) {
  -webkit-transform: translate3d(1085px, -1764px, 832px);
          transform: translate3d(1085px, -1764px, 832px);
}

.star:nth-child(142) {
  -webkit-transform: translate3d(-1860px, -923px, 878px);
          transform: translate3d(-1860px, -923px, 878px);
}

.star:nth-child(143) {
  -webkit-transform: translate3d(-147px, 1456px, -1114px);
          transform: translate3d(-147px, 1456px, -1114px);
}

.star:nth-child(144) {
  -webkit-transform: translate3d(291px, 1472px, -830px);
          transform: translate3d(291px, 1472px, -830px);
}

.star:nth-child(145) {
  -webkit-transform: translate3d(-1049px, 612px, -1665px);
          transform: translate3d(-1049px, 612px, -1665px);
}

.star:nth-child(146) {
  -webkit-transform: translate3d(1159px, -1px, -38px);
          transform: translate3d(1159px, -1px, -38px);
}

.star:nth-child(147) {
  -webkit-transform: translate3d(-1560px, -1434px, 1195px);
          transform: translate3d(-1560px, -1434px, 1195px);
}

.star:nth-child(148) {
  -webkit-transform: translate3d(685px, -1112px, -1298px);
          transform: translate3d(685px, -1112px, -1298px);
}

.star:nth-child(149) {
  -webkit-transform: translate3d(1283px, 1976px, 702px);
          transform: translate3d(1283px, 1976px, 702px);
}

.star:nth-child(150) {
  -webkit-transform: translate3d(867px, 1934px, -489px);
          transform: translate3d(867px, 1934px, -489px);
}

.star:nth-child(151) {
  -webkit-transform: translate3d(-955px, 1875px, 1370px);
          transform: translate3d(-955px, 1875px, 1370px);
}

.star:nth-child(152) {
  -webkit-transform: translate3d(235px, 487px, -1249px);
          transform: translate3d(235px, 487px, -1249px);
}

.star:nth-child(153) {
  -webkit-transform: translate3d(-1595px, -816px, -1334px);
          transform: translate3d(-1595px, -816px, -1334px);
}

.star:nth-child(154) {
  -webkit-transform: translate3d(1346px, -1670px, -1063px);
          transform: translate3d(1346px, -1670px, -1063px);
}

.star:nth-child(155) {
  -webkit-transform: translate3d(-1813px, -1984px, -1863px);
          transform: translate3d(-1813px, -1984px, -1863px);
}

.star:nth-child(156) {
  -webkit-transform: translate3d(1362px, -165px, 1244px);
          transform: translate3d(1362px, -165px, 1244px);
}

.star:nth-child(157) {
  -webkit-transform: translate3d(417px, -231px, 269px);
          transform: translate3d(417px, -231px, 269px);
}

.star:nth-child(158) {
  -webkit-transform: translate3d(-1535px, 148px, -1532px);
          transform: translate3d(-1535px, 148px, -1532px);
}

.star:nth-child(159) {
  -webkit-transform: translate3d(-1162px, -342px, -881px);
          transform: translate3d(-1162px, -342px, -881px);
}

.star:nth-child(160) {
  -webkit-transform: translate3d(-1891px, -415px, 1870px);
          transform: translate3d(-1891px, -415px, 1870px);
}

.star:nth-child(161) {
  -webkit-transform: translate3d(1047px, -1273px, 1121px);
          transform: translate3d(1047px, -1273px, 1121px);
}

.star:nth-child(162) {
  -webkit-transform: translate3d(-1835px, -70px, 1378px);
          transform: translate3d(-1835px, -70px, 1378px);
}

.star:nth-child(163) {
  -webkit-transform: translate3d(-1815px, -1852px, 1179px);
          transform: translate3d(-1815px, -1852px, 1179px);
}

.star:nth-child(164) {
  -webkit-transform: translate3d(-1049px, -1257px, 1374px);
          transform: translate3d(-1049px, -1257px, 1374px);
}

.star:nth-child(165) {
  -webkit-transform: translate3d(736px, 1362px, -580px);
          transform: translate3d(736px, 1362px, -580px);
}

.star:nth-child(166) {
  -webkit-transform: translate3d(1515px, -1402px, -1624px);
          transform: translate3d(1515px, -1402px, -1624px);
}

.star:nth-child(167) {
  -webkit-transform: translate3d(-1205px, 1886px, 258px);
          transform: translate3d(-1205px, 1886px, 258px);
}

.star:nth-child(168) {
  -webkit-transform: translate3d(116px, -706px, -639px);
          transform: translate3d(116px, -706px, -639px);
}

.star:nth-child(169) {
  -webkit-transform: translate3d(-945px, 837px, 937px);
          transform: translate3d(-945px, 837px, 937px);
}

.star:nth-child(170) {
  -webkit-transform: translate3d(279px, 191px, 1656px);
          transform: translate3d(279px, 191px, 1656px);
}

.star:nth-child(171) {
  -webkit-transform: translate3d(1583px, -10px, -817px);
          transform: translate3d(1583px, -10px, -817px);
}

.star:nth-child(172) {
  -webkit-transform: translate3d(-1334px, 1019px, -1929px);
          transform: translate3d(-1334px, 1019px, -1929px);
}

.star:nth-child(173) {
  -webkit-transform: translate3d(217px, -608px, -1300px);
          transform: translate3d(217px, -608px, -1300px);
}

.star:nth-child(174) {
  -webkit-transform: translate3d(-89px, 1126px, 1551px);
          transform: translate3d(-89px, 1126px, 1551px);
}

.star:nth-child(175) {
  -webkit-transform: translate3d(1501px, 575px, 325px);
          transform: translate3d(1501px, 575px, 325px);
}

.star:nth-child(176) {
  -webkit-transform: translate3d(1132px, 1047px, -1404px);
          transform: translate3d(1132px, 1047px, -1404px);
}

.star:nth-child(177) {
  -webkit-transform: translate3d(-1152px, 549px, 1144px);
          transform: translate3d(-1152px, 549px, 1144px);
}

.star:nth-child(178) {
  -webkit-transform: translate3d(1107px, 1139px, -1801px);
          transform: translate3d(1107px, 1139px, -1801px);
}

.star:nth-child(179) {
  -webkit-transform: translate3d(1393px, -1217px, 1949px);
          transform: translate3d(1393px, -1217px, 1949px);
}

.star:nth-child(180) {
  -webkit-transform: translate3d(1219px, 1972px, 7px);
          transform: translate3d(1219px, 1972px, 7px);
}

.star:nth-child(181) {
  -webkit-transform: translate3d(642px, -1127px, 851px);
          transform: translate3d(642px, -1127px, 851px);
}

.star:nth-child(182) {
  -webkit-transform: translate3d(1375px, -11px, 519px);
          transform: translate3d(1375px, -11px, 519px);
}

.star:nth-child(183) {
  -webkit-transform: translate3d(1536px, -847px, -1135px);
          transform: translate3d(1536px, -847px, -1135px);
}

.star:nth-child(184) {
  -webkit-transform: translate3d(393px, -69px, -190px);
          transform: translate3d(393px, -69px, -190px);
}

.star:nth-child(185) {
  -webkit-transform: translate3d(-1460px, -48px, 708px);
          transform: translate3d(-1460px, -48px, 708px);
}

.star:nth-child(186) {
  -webkit-transform: translate3d(-1705px, -678px, 364px);
          transform: translate3d(-1705px, -678px, 364px);
}

.star:nth-child(187) {
  -webkit-transform: translate3d(1781px, -683px, -517px);
          transform: translate3d(1781px, -683px, -517px);
}

.star:nth-child(188) {
  -webkit-transform: translate3d(1767px, -102px, -1333px);
          transform: translate3d(1767px, -102px, -1333px);
}

.star:nth-child(189) {
  -webkit-transform: translate3d(1972px, 473px, 689px);
          transform: translate3d(1972px, 473px, 689px);
}

.star:nth-child(190) {
  -webkit-transform: translate3d(449px, -1615px, 783px);
          transform: translate3d(449px, -1615px, 783px);
}

.star:nth-child(191) {
  -webkit-transform: translate3d(-1682px, -1631px, 861px);
          transform: translate3d(-1682px, -1631px, 861px);
}

.star:nth-child(192) {
  -webkit-transform: translate3d(1290px, 1983px, -308px);
          transform: translate3d(1290px, 1983px, -308px);
}

.star:nth-child(193) {
  -webkit-transform: translate3d(-1739px, 1419px, 1095px);
          transform: translate3d(-1739px, 1419px, 1095px);
}

.star:nth-child(194) {
  -webkit-transform: translate3d(-286px, -1088px, 426px);
          transform: translate3d(-286px, -1088px, 426px);
}

.star:nth-child(195) {
  -webkit-transform: translate3d(303px, -1720px, -47px);
          transform: translate3d(303px, -1720px, -47px);
}

.star:nth-child(196) {
  -webkit-transform: translate3d(-392px, 1201px, -49px);
          transform: translate3d(-392px, 1201px, -49px);
}

.star:nth-child(197) {
  -webkit-transform: translate3d(309px, 596px, 658px);
          transform: translate3d(309px, 596px, 658px);
}

.star:nth-child(198) {
  -webkit-transform: translate3d(1025px, 581px, 433px);
          transform: translate3d(1025px, 581px, 433px);
}

.star:nth-child(199) {
  -webkit-transform: translate3d(-1845px, -1579px, -311px);
          transform: translate3d(-1845px, -1579px, -311px);
}

.star:nth-child(200) {
  -webkit-transform: translate3d(-1993px, 143px, -1551px);
          transform: translate3d(-1993px, 143px, -1551px);
}

.star:nth-child(201) {
  -webkit-transform: translate3d(100px, -1686px, -649px);
          transform: translate3d(100px, -1686px, -649px);
}

.star:nth-child(202) {
  -webkit-transform: translate3d(-1038px, -1025px, -1313px);
          transform: translate3d(-1038px, -1025px, -1313px);
}

.star:nth-child(203) {
  -webkit-transform: translate3d(1486px, 1090px, 193px);
          transform: translate3d(1486px, 1090px, 193px);
}

.star:nth-child(204) {
  -webkit-transform: translate3d(540px, 1661px, -1920px);
          transform: translate3d(540px, 1661px, -1920px);
}

.star:nth-child(205) {
  -webkit-transform: translate3d(-1841px, 22px, 66px);
          transform: translate3d(-1841px, 22px, 66px);
}

.star:nth-child(206) {
  -webkit-transform: translate3d(-809px, -177px, 208px);
          transform: translate3d(-809px, -177px, 208px);
}

.star:nth-child(207) {
  -webkit-transform: translate3d(1319px, -1444px, 1652px);
          transform: translate3d(1319px, -1444px, 1652px);
}

.star:nth-child(208) {
  -webkit-transform: translate3d(697px, 1121px, 1024px);
          transform: translate3d(697px, 1121px, 1024px);
}

.star:nth-child(209) {
  -webkit-transform: translate3d(221px, 834px, 995px);
          transform: translate3d(221px, 834px, 995px);
}

.star:nth-child(210) {
  -webkit-transform: translate3d(1661px, 1588px, 1726px);
          transform: translate3d(1661px, 1588px, 1726px);
}

.star:nth-child(211) {
  -webkit-transform: translate3d(1068px, -185px, 1435px);
          transform: translate3d(1068px, -185px, 1435px);
}

.star:nth-child(212) {
  -webkit-transform: translate3d(-378px, -42px, 1601px);
          transform: translate3d(-378px, -42px, 1601px);
}

.star:nth-child(213) {
  -webkit-transform: translate3d(-198px, -1764px, 493px);
          transform: translate3d(-198px, -1764px, 493px);
}

.star:nth-child(214) {
  -webkit-transform: translate3d(188px, -237px, -1284px);
          transform: translate3d(188px, -237px, -1284px);
}

.star:nth-child(215) {
  -webkit-transform: translate3d(-892px, 812px, -1913px);
          transform: translate3d(-892px, 812px, -1913px);
}

.star:nth-child(216) {
  -webkit-transform: translate3d(140px, 997px, 189px);
          transform: translate3d(140px, 997px, 189px);
}

.star:nth-child(217) {
  -webkit-transform: translate3d(-617px, -484px, -1357px);
          transform: translate3d(-617px, -484px, -1357px);
}

.star:nth-child(218) {
  -webkit-transform: translate3d(1045px, -1826px, -620px);
          transform: translate3d(1045px, -1826px, -620px);
}

.star:nth-child(219) {
  -webkit-transform: translate3d(32px, -1383px, -216px);
          transform: translate3d(32px, -1383px, -216px);
}

.star:nth-child(220) {
  -webkit-transform: translate3d(478px, -1268px, 252px);
          transform: translate3d(478px, -1268px, 252px);
}

.star:nth-child(221) {
  -webkit-transform: translate3d(32px, 227px, 1138px);
          transform: translate3d(32px, 227px, 1138px);
}

.star:nth-child(222) {
  -webkit-transform: translate3d(-469px, -591px, -632px);
          transform: translate3d(-469px, -591px, -632px);
}

.star:nth-child(223) {
  -webkit-transform: translate3d(930px, 175px, 1409px);
          transform: translate3d(930px, 175px, 1409px);
}

.star:nth-child(224) {
  -webkit-transform: translate3d(711px, -797px, -1636px);
          transform: translate3d(711px, -797px, -1636px);
}

.star:nth-child(225) {
  -webkit-transform: translate3d(-1595px, 321px, -330px);
          transform: translate3d(-1595px, 321px, -330px);
}

.star:nth-child(226) {
  -webkit-transform: translate3d(-1340px, -1680px, -1221px);
          transform: translate3d(-1340px, -1680px, -1221px);
}

.star:nth-child(227) {
  -webkit-transform: translate3d(-237px, 646px, 464px);
          transform: translate3d(-237px, 646px, 464px);
}

.star:nth-child(228) {
  -webkit-transform: translate3d(398px, -1009px, 532px);
          transform: translate3d(398px, -1009px, 532px);
}

.star:nth-child(229) {
  -webkit-transform: translate3d(-844px, 1644px, 247px);
          transform: translate3d(-844px, 1644px, 247px);
}

.star:nth-child(230) {
  -webkit-transform: translate3d(791px, 1568px, 878px);
          transform: translate3d(791px, 1568px, 878px);
}

.star:nth-child(231) {
  -webkit-transform: translate3d(17px, -58px, 679px);
          transform: translate3d(17px, -58px, 679px);
}

.star:nth-child(232) {
  -webkit-transform: translate3d(-1271px, 1911px, -327px);
          transform: translate3d(-1271px, 1911px, -327px);
}

.star:nth-child(233) {
  -webkit-transform: translate3d(-1069px, 1152px, 1700px);
          transform: translate3d(-1069px, 1152px, 1700px);
}

.star:nth-child(234) {
  -webkit-transform: translate3d(-979px, 84px, 1196px);
          transform: translate3d(-979px, 84px, 1196px);
}

.star:nth-child(235) {
  -webkit-transform: translate3d(-449px, -1699px, 248px);
          transform: translate3d(-449px, -1699px, 248px);
}

.star:nth-child(236) {
  -webkit-transform: translate3d(-1836px, 139px, -172px);
          transform: translate3d(-1836px, 139px, -172px);
}

.star:nth-child(237) {
  -webkit-transform: translate3d(-1038px, 1041px, 1088px);
          transform: translate3d(-1038px, 1041px, 1088px);
}

.star:nth-child(238) {
  -webkit-transform: translate3d(1904px, 635px, -784px);
          transform: translate3d(1904px, 635px, -784px);
}

.star:nth-child(239) {
  -webkit-transform: translate3d(-794px, 1712px, 1319px);
          transform: translate3d(-794px, 1712px, 1319px);
}

.star:nth-child(240) {
  -webkit-transform: translate3d(1346px, -455px, -1574px);
          transform: translate3d(1346px, -455px, -1574px);
}

.star:nth-child(241) {
  -webkit-transform: translate3d(-1608px, 1527px, -581px);
          transform: translate3d(-1608px, 1527px, -581px);
}

.star:nth-child(242) {
  -webkit-transform: translate3d(289px, 1233px, 1300px);
          transform: translate3d(289px, 1233px, 1300px);
}

.star:nth-child(243) {
  -webkit-transform: translate3d(1775px, 1723px, 341px);
          transform: translate3d(1775px, 1723px, 341px);
}

.star:nth-child(244) {
  -webkit-transform: translate3d(728px, 1009px, 1142px);
          transform: translate3d(728px, 1009px, 1142px);
}

.star:nth-child(245) {
  -webkit-transform: translate3d(274px, 89px, 548px);
          transform: translate3d(274px, 89px, 548px);
}

.star:nth-child(246) {
  -webkit-transform: translate3d(704px, -1787px, -1852px);
          transform: translate3d(704px, -1787px, -1852px);
}

.star:nth-child(247) {
  -webkit-transform: translate3d(-1518px, -538px, -947px);
          transform: translate3d(-1518px, -538px, -947px);
}

.star:nth-child(248) {
  -webkit-transform: translate3d(1316px, -1983px, -1143px);
          transform: translate3d(1316px, -1983px, -1143px);
}

.star:nth-child(249) {
  -webkit-transform: translate3d(1379px, -1375px, 92px);
          transform: translate3d(1379px, -1375px, 92px);
}

.star:nth-child(250) {
  -webkit-transform: translate3d(-806px, 1341px, 1396px);
          transform: translate3d(-806px, 1341px, 1396px);
}

.star:nth-child(251) {
  -webkit-transform: translate3d(-1977px, -26px, 1933px);
          transform: translate3d(-1977px, -26px, 1933px);
}

.star:nth-child(252) {
  -webkit-transform: translate3d(1588px, -232px, -691px);
          transform: translate3d(1588px, -232px, -691px);
}

.star:nth-child(253) {
  -webkit-transform: translate3d(1915px, -139px, 1782px);
          transform: translate3d(1915px, -139px, 1782px);
}

.star:nth-child(254) {
  -webkit-transform: translate3d(157px, 494px, 382px);
          transform: translate3d(157px, 494px, 382px);
}

.star:nth-child(255) {
  -webkit-transform: translate3d(1875px, -595px, 1386px);
          transform: translate3d(1875px, -595px, 1386px);
}

.star:nth-child(256) {
  -webkit-transform: translate3d(1209px, 1950px, -1216px);
          transform: translate3d(1209px, 1950px, -1216px);
}

.star:nth-child(257) {
  -webkit-transform: translate3d(-1084px, 1859px, -1477px);
          transform: translate3d(-1084px, 1859px, -1477px);
}

.star:nth-child(258) {
  -webkit-transform: translate3d(-1755px, -1274px, 1306px);
          transform: translate3d(-1755px, -1274px, 1306px);
}

.star:nth-child(259) {
  -webkit-transform: translate3d(1905px, -1400px, -151px);
          transform: translate3d(1905px, -1400px, -151px);
}

.star:nth-child(260) {
  -webkit-transform: translate3d(606px, 821px, 143px);
          transform: translate3d(606px, 821px, 143px);
}

.star:nth-child(261) {
  -webkit-transform: translate3d(-937px, 389px, 1255px);
          transform: translate3d(-937px, 389px, 1255px);
}

.star:nth-child(262) {
  -webkit-transform: translate3d(1269px, 1058px, -1998px);
          transform: translate3d(1269px, 1058px, -1998px);
}

.star:nth-child(263) {
  -webkit-transform: translate3d(-257px, -1837px, -366px);
          transform: translate3d(-257px, -1837px, -366px);
}

.star:nth-child(264) {
  -webkit-transform: translate3d(104px, -220px, -775px);
          transform: translate3d(104px, -220px, -775px);
}

.star:nth-child(265) {
  -webkit-transform: translate3d(-1633px, -250px, -178px);
          transform: translate3d(-1633px, -250px, -178px);
}

.star:nth-child(266) {
  -webkit-transform: translate3d(-1822px, -1888px, -118px);
          transform: translate3d(-1822px, -1888px, -118px);
}

.star:nth-child(267) {
  -webkit-transform: translate3d(-1286px, 228px, -1025px);
          transform: translate3d(-1286px, 228px, -1025px);
}

.star:nth-child(268) {
  -webkit-transform: translate3d(1855px, 342px, -158px);
          transform: translate3d(1855px, 342px, -158px);
}

.star:nth-child(269) {
  -webkit-transform: translate3d(502px, -475px, -1559px);
          transform: translate3d(502px, -475px, -1559px);
}

.star:nth-child(270) {
  -webkit-transform: translate3d(-1286px, 711px, -706px);
          transform: translate3d(-1286px, 711px, -706px);
}

.star:nth-child(271) {
  -webkit-transform: translate3d(-432px, -993px, -419px);
          transform: translate3d(-432px, -993px, -419px);
}

.star:nth-child(272) {
  -webkit-transform: translate3d(-1496px, -1155px, 1339px);
          transform: translate3d(-1496px, -1155px, 1339px);
}

.star:nth-child(273) {
  -webkit-transform: translate3d(465px, -238px, 1267px);
          transform: translate3d(465px, -238px, 1267px);
}

.star:nth-child(274) {
  -webkit-transform: translate3d(1947px, 1330px, 489px);
          transform: translate3d(1947px, 1330px, 489px);
}

.star:nth-child(275) {
  -webkit-transform: translate3d(-137px, -815px, -1194px);
          transform: translate3d(-137px, -815px, -1194px);
}

.star:nth-child(276) {
  -webkit-transform: translate3d(-949px, -818px, -267px);
          transform: translate3d(-949px, -818px, -267px);
}

.star:nth-child(277) {
  -webkit-transform: translate3d(-929px, 375px, -153px);
          transform: translate3d(-929px, 375px, -153px);
}

.star:nth-child(278) {
  -webkit-transform: translate3d(1543px, -1229px, 988px);
          transform: translate3d(1543px, -1229px, 988px);
}

.star:nth-child(279) {
  -webkit-transform: translate3d(-1814px, 1734px, -271px);
          transform: translate3d(-1814px, 1734px, -271px);
}

.star:nth-child(280) {
  -webkit-transform: translate3d(1473px, 316px, -1225px);
          transform: translate3d(1473px, 316px, -1225px);
}

.star:nth-child(281) {
  -webkit-transform: translate3d(-810px, 1385px, -1682px);
          transform: translate3d(-810px, 1385px, -1682px);
}

.star:nth-child(282) {
  -webkit-transform: translate3d(-634px, 1927px, -997px);
          transform: translate3d(-634px, 1927px, -997px);
}

.star:nth-child(283) {
  -webkit-transform: translate3d(-1627px, 950px, 462px);
          transform: translate3d(-1627px, 950px, 462px);
}

.star:nth-child(284) {
  -webkit-transform: translate3d(173px, -1772px, -1315px);
          transform: translate3d(173px, -1772px, -1315px);
}

.star:nth-child(285) {
  -webkit-transform: translate3d(-317px, 1862px, 193px);
          transform: translate3d(-317px, 1862px, 193px);
}

.star:nth-child(286) {
  -webkit-transform: translate3d(-1546px, -1167px, -1428px);
          transform: translate3d(-1546px, -1167px, -1428px);
}

.star:nth-child(287) {
  -webkit-transform: translate3d(1469px, -1995px, -56px);
          transform: translate3d(1469px, -1995px, -56px);
}

.star:nth-child(288) {
  -webkit-transform: translate3d(301px, -1504px, -431px);
          transform: translate3d(301px, -1504px, -431px);
}

.star:nth-child(289) {
  -webkit-transform: translate3d(1567px, 1032px, -1658px);
          transform: translate3d(1567px, 1032px, -1658px);
}

.star:nth-child(290) {
  -webkit-transform: translate3d(-1965px, 673px, -1506px);
          transform: translate3d(-1965px, 673px, -1506px);
}

.star:nth-child(291) {
  -webkit-transform: translate3d(-341px, -236px, 1995px);
          transform: translate3d(-341px, -236px, 1995px);
}

.star:nth-child(292) {
  -webkit-transform: translate3d(95px, 824px, 1024px);
          transform: translate3d(95px, 824px, 1024px);
}

.star:nth-child(293) {
  -webkit-transform: translate3d(-1738px, 870px, 1594px);
          transform: translate3d(-1738px, 870px, 1594px);
}

.star:nth-child(294) {
  -webkit-transform: translate3d(-418px, 1412px, 1206px);
          transform: translate3d(-418px, 1412px, 1206px);
}

.star:nth-child(295) {
  -webkit-transform: translate3d(-183px, -1933px, -1677px);
          transform: translate3d(-183px, -1933px, -1677px);
}

.star:nth-child(296) {
  -webkit-transform: translate3d(-1128px, -1539px, 262px);
          transform: translate3d(-1128px, -1539px, 262px);
}

.star:nth-child(297) {
  -webkit-transform: translate3d(709px, 317px, -1723px);
          transform: translate3d(709px, 317px, -1723px);
}

.star:nth-child(298) {
  -webkit-transform: translate3d(1079px, -820px, 876px);
          transform: translate3d(1079px, -820px, 876px);
}

.star:nth-child(299) {
  -webkit-transform: translate3d(1868px, -1312px, 1957px);
          transform: translate3d(1868px, -1312px, 1957px);
}

.star:nth-child(300) {
  -webkit-transform: translate3d(-488px, -1632px, 528px);
          transform: translate3d(-488px, -1632px, 528px);
}

.star:nth-child(301) {
  -webkit-transform: translate3d(118px, 1193px, -929px);
          transform: translate3d(118px, 1193px, -929px);
}

.star:nth-child(302) {
  -webkit-transform: translate3d(-1477px, 398px, -214px);
          transform: translate3d(-1477px, 398px, -214px);
}

.star:nth-child(303) {
  -webkit-transform: translate3d(1635px, 580px, 267px);
          transform: translate3d(1635px, 580px, 267px);
}

.star:nth-child(304) {
  -webkit-transform: translate3d(1359px, 1432px, 1026px);
          transform: translate3d(1359px, 1432px, 1026px);
}

.star:nth-child(305) {
  -webkit-transform: translate3d(-865px, 1194px, 1386px);
          transform: translate3d(-865px, 1194px, 1386px);
}

.star:nth-child(306) {
  -webkit-transform: translate3d(-1271px, 1955px, -612px);
          transform: translate3d(-1271px, 1955px, -612px);
}

.star:nth-child(307) {
  -webkit-transform: translate3d(-557px, 652px, -254px);
          transform: translate3d(-557px, 652px, -254px);
}

.star:nth-child(308) {
  -webkit-transform: translate3d(431px, 1091px, -1473px);
          transform: translate3d(431px, 1091px, -1473px);
}

.star:nth-child(309) {
  -webkit-transform: translate3d(846px, 917px, -453px);
          transform: translate3d(846px, 917px, -453px);
}

.star:nth-child(310) {
  -webkit-transform: translate3d(-983px, 1316px, -292px);
          transform: translate3d(-983px, 1316px, -292px);
}

.star:nth-child(311) {
  -webkit-transform: translate3d(175px, -1008px, 511px);
          transform: translate3d(175px, -1008px, 511px);
}

.star:nth-child(312) {
  -webkit-transform: translate3d(1604px, -198px, -1604px);
          transform: translate3d(1604px, -198px, -1604px);
}

.star:nth-child(313) {
  -webkit-transform: translate3d(907px, 52px, -433px);
          transform: translate3d(907px, 52px, -433px);
}

.star:nth-child(314) {
  -webkit-transform: translate3d(1132px, -336px, -1127px);
          transform: translate3d(1132px, -336px, -1127px);
}

.star:nth-child(315) {
  -webkit-transform: translate3d(1083px, -1504px, -570px);
          transform: translate3d(1083px, -1504px, -570px);
}

.star:nth-child(316) {
  -webkit-transform: translate3d(726px, 87px, 224px);
          transform: translate3d(726px, 87px, 224px);
}

.star:nth-child(317) {
  -webkit-transform: translate3d(-82px, -1402px, -1593px);
          transform: translate3d(-82px, -1402px, -1593px);
}

.star:nth-child(318) {
  -webkit-transform: translate3d(-858px, -1118px, 1342px);
          transform: translate3d(-858px, -1118px, 1342px);
}

.star:nth-child(319) {
  -webkit-transform: translate3d(-634px, -899px, 1013px);
          transform: translate3d(-634px, -899px, 1013px);
}

.star:nth-child(320) {
  -webkit-transform: translate3d(-868px, -1416px, 1181px);
          transform: translate3d(-868px, -1416px, 1181px);
}

.star:nth-child(321) {
  -webkit-transform: translate3d(1229px, 1719px, -1656px);
          transform: translate3d(1229px, 1719px, -1656px);
}

.star:nth-child(322) {
  -webkit-transform: translate3d(-1827px, -1433px, 1547px);
          transform: translate3d(-1827px, -1433px, 1547px);
}

.star:nth-child(323) {
  -webkit-transform: translate3d(905px, 696px, 1397px);
          transform: translate3d(905px, 696px, 1397px);
}

.star:nth-child(324) {
  -webkit-transform: translate3d(-269px, 1773px, 385px);
          transform: translate3d(-269px, 1773px, 385px);
}

.star:nth-child(325) {
  -webkit-transform: translate3d(583px, 1778px, 123px);
          transform: translate3d(583px, 1778px, 123px);
}

.star:nth-child(326) {
  -webkit-transform: translate3d(-674px, 902px, 181px);
          transform: translate3d(-674px, 902px, 181px);
}

.star:nth-child(327) {
  -webkit-transform: translate3d(-1892px, -1275px, 832px);
          transform: translate3d(-1892px, -1275px, 832px);
}

.star:nth-child(328) {
  -webkit-transform: translate3d(-1349px, -764px, -1544px);
          transform: translate3d(-1349px, -764px, -1544px);
}

.star:nth-child(329) {
  -webkit-transform: translate3d(1486px, 165px, 1065px);
          transform: translate3d(1486px, 165px, 1065px);
}

.star:nth-child(330) {
  -webkit-transform: translate3d(368px, -1404px, -653px);
          transform: translate3d(368px, -1404px, -653px);
}

.star:nth-child(331) {
  -webkit-transform: translate3d(1346px, 688px, -526px);
          transform: translate3d(1346px, 688px, -526px);
}

.star:nth-child(332) {
  -webkit-transform: translate3d(438px, -1900px, -1929px);
          transform: translate3d(438px, -1900px, -1929px);
}

.star:nth-child(333) {
  -webkit-transform: translate3d(-71px, 1930px, 1354px);
          transform: translate3d(-71px, 1930px, 1354px);
}

.star:nth-child(334) {
  -webkit-transform: translate3d(-1782px, 408px, -197px);
          transform: translate3d(-1782px, 408px, -197px);
}

.star:nth-child(335) {
  -webkit-transform: translate3d(1463px, -674px, 34px);
          transform: translate3d(1463px, -674px, 34px);
}

.star:nth-child(336) {
  -webkit-transform: translate3d(1059px, -1893px, -1955px);
          transform: translate3d(1059px, -1893px, -1955px);
}

.star:nth-child(337) {
  -webkit-transform: translate3d(-1877px, -1937px, 55px);
          transform: translate3d(-1877px, -1937px, 55px);
}

.star:nth-child(338) {
  -webkit-transform: translate3d(142px, 657px, 1162px);
          transform: translate3d(142px, 657px, 1162px);
}

.star:nth-child(339) {
  -webkit-transform: translate3d(142px, -1776px, 1299px);
          transform: translate3d(142px, -1776px, 1299px);
}

.star:nth-child(340) {
  -webkit-transform: translate3d(-1144px, -391px, 161px);
          transform: translate3d(-1144px, -391px, 161px);
}

.star:nth-child(341) {
  -webkit-transform: translate3d(-1239px, -1054px, -1284px);
          transform: translate3d(-1239px, -1054px, -1284px);
}

.star:nth-child(342) {
  -webkit-transform: translate3d(-1038px, 152px, -401px);
          transform: translate3d(-1038px, 152px, -401px);
}

.star:nth-child(343) {
  -webkit-transform: translate3d(729px, -1278px, -1933px);
          transform: translate3d(729px, -1278px, -1933px);
}

.star:nth-child(344) {
  -webkit-transform: translate3d(775px, 92px, -954px);
          transform: translate3d(775px, 92px, -954px);
}

.star:nth-child(345) {
  -webkit-transform: translate3d(-313px, 1960px, -1587px);
          transform: translate3d(-313px, 1960px, -1587px);
}

.star:nth-child(346) {
  -webkit-transform: translate3d(-585px, -636px, 442px);
          transform: translate3d(-585px, -636px, 442px);
}

.star:nth-child(347) {
  -webkit-transform: translate3d(-1908px, 1136px, -1379px);
          transform: translate3d(-1908px, 1136px, -1379px);
}

.star:nth-child(348) {
  -webkit-transform: translate3d(-1144px, 908px, 441px);
          transform: translate3d(-1144px, 908px, 441px);
}

.star:nth-child(349) {
  -webkit-transform: translate3d(1255px, 1735px, -1724px);
          transform: translate3d(1255px, 1735px, -1724px);
}

.star:nth-child(350) {
  -webkit-transform: translate3d(-280px, -409px, 1034px);
          transform: translate3d(-280px, -409px, 1034px);
}

.star:nth-child(351) {
  -webkit-transform: translate3d(194px, -412px, 1318px);
          transform: translate3d(194px, -412px, 1318px);
}

.star:nth-child(352) {
  -webkit-transform: translate3d(1940px, -1387px, 1618px);
          transform: translate3d(1940px, -1387px, 1618px);
}

.star:nth-child(353) {
  -webkit-transform: translate3d(205px, -1367px, 887px);
          transform: translate3d(205px, -1367px, 887px);
}

.star:nth-child(354) {
  -webkit-transform: translate3d(-211px, 1033px, -1446px);
          transform: translate3d(-211px, 1033px, -1446px);
}

.star:nth-child(355) {
  -webkit-transform: translate3d(-719px, 455px, 1699px);
          transform: translate3d(-719px, 455px, 1699px);
}

.star:nth-child(356) {
  -webkit-transform: translate3d(1651px, -1884px, -1764px);
          transform: translate3d(1651px, -1884px, -1764px);
}

.star:nth-child(357) {
  -webkit-transform: translate3d(-486px, 1744px, 825px);
          transform: translate3d(-486px, 1744px, 825px);
}

.star:nth-child(358) {
  -webkit-transform: translate3d(-959px, 494px, -1347px);
          transform: translate3d(-959px, 494px, -1347px);
}

.star:nth-child(359) {
  -webkit-transform: translate3d(25px, -1307px, 1027px);
          transform: translate3d(25px, -1307px, 1027px);
}

.star:nth-child(360) {
  -webkit-transform: translate3d(1770px, 784px, 676px);
          transform: translate3d(1770px, 784px, 676px);
}

.star:nth-child(361) {
  -webkit-transform: translate3d(58px, 1050px, -960px);
          transform: translate3d(58px, 1050px, -960px);
}

.star:nth-child(362) {
  -webkit-transform: translate3d(-542px, -672px, 1181px);
          transform: translate3d(-542px, -672px, 1181px);
}

.star:nth-child(363) {
  -webkit-transform: translate3d(738px, -970px, 1518px);
          transform: translate3d(738px, -970px, 1518px);
}

.star:nth-child(364) {
  -webkit-transform: translate3d(-69px, 1561px, 1776px);
          transform: translate3d(-69px, 1561px, 1776px);
}

.star:nth-child(365) {
  -webkit-transform: translate3d(-1560px, 992px, 1257px);
          transform: translate3d(-1560px, 992px, 1257px);
}

.star:nth-child(366) {
  -webkit-transform: translate3d(-1358px, 1640px, 13px);
          transform: translate3d(-1358px, 1640px, 13px);
}

.star:nth-child(367) {
  -webkit-transform: translate3d(1293px, -823px, -813px);
          transform: translate3d(1293px, -823px, -813px);
}

.star:nth-child(368) {
  -webkit-transform: translate3d(-1889px, -1766px, -911px);
          transform: translate3d(-1889px, -1766px, -911px);
}

.star:nth-child(369) {
  -webkit-transform: translate3d(269px, 1284px, 501px);
          transform: translate3d(269px, 1284px, 501px);
}

.star:nth-child(370) {
  -webkit-transform: translate3d(-1573px, 510px, -206px);
          transform: translate3d(-1573px, 510px, -206px);
}

.star:nth-child(371) {
  -webkit-transform: translate3d(-327px, 955px, -1562px);
          transform: translate3d(-327px, 955px, -1562px);
}

.star:nth-child(372) {
  -webkit-transform: translate3d(1169px, 1998px, -612px);
          transform: translate3d(1169px, 1998px, -612px);
}

.star:nth-child(373) {
  -webkit-transform: translate3d(-1616px, -39px, 786px);
          transform: translate3d(-1616px, -39px, 786px);
}

.star:nth-child(374) {
  -webkit-transform: translate3d(452px, -123px, -1190px);
          transform: translate3d(452px, -123px, -1190px);
}

.star:nth-child(375) {
  -webkit-transform: translate3d(-854px, -358px, 171px);
          transform: translate3d(-854px, -358px, 171px);
}

.star:nth-child(376) {
  -webkit-transform: translate3d(-382px, -159px, -1969px);
          transform: translate3d(-382px, -159px, -1969px);
}

.star:nth-child(377) {
  -webkit-transform: translate3d(-1748px, -336px, -212px);
          transform: translate3d(-1748px, -336px, -212px);
}

.star:nth-child(378) {
  -webkit-transform: translate3d(-197px, 766px, 429px);
          transform: translate3d(-197px, 766px, 429px);
}

.star:nth-child(379) {
  -webkit-transform: translate3d(72px, -1502px, 1758px);
          transform: translate3d(72px, -1502px, 1758px);
}

.star:nth-child(380) {
  -webkit-transform: translate3d(49px, -41px, 1008px);
          transform: translate3d(49px, -41px, 1008px);
}

.star:nth-child(381) {
  -webkit-transform: translate3d(1668px, -998px, -265px);
          transform: translate3d(1668px, -998px, -265px);
}

.star:nth-child(382) {
  -webkit-transform: translate3d(-267px, -1811px, -455px);
          transform: translate3d(-267px, -1811px, -455px);
}

.star:nth-child(383) {
  -webkit-transform: translate3d(-831px, -1523px, -1266px);
          transform: translate3d(-831px, -1523px, -1266px);
}

.star:nth-child(384) {
  -webkit-transform: translate3d(1718px, 494px, -137px);
          transform: translate3d(1718px, 494px, -137px);
}

.star:nth-child(385) {
  -webkit-transform: translate3d(1132px, -1050px, 829px);
          transform: translate3d(1132px, -1050px, 829px);
}

.star:nth-child(386) {
  -webkit-transform: translate3d(79px, -1738px, 263px);
          transform: translate3d(79px, -1738px, 263px);
}

.star:nth-child(387) {
  -webkit-transform: translate3d(1664px, -937px, 1367px);
          transform: translate3d(1664px, -937px, 1367px);
}

.star:nth-child(388) {
  -webkit-transform: translate3d(1660px, 1693px, 738px);
          transform: translate3d(1660px, 1693px, 738px);
}

.star:nth-child(389) {
  -webkit-transform: translate3d(823px, 1420px, 771px);
          transform: translate3d(823px, 1420px, 771px);
}

.star:nth-child(390) {
  -webkit-transform: translate3d(-1791px, -1176px, 1405px);
          transform: translate3d(-1791px, -1176px, 1405px);
}

.star:nth-child(391) {
  -webkit-transform: translate3d(-640px, -1450px, 306px);
          transform: translate3d(-640px, -1450px, 306px);
}

.star:nth-child(392) {
  -webkit-transform: translate3d(1981px, -777px, 1403px);
          transform: translate3d(1981px, -777px, 1403px);
}

.star:nth-child(393) {
  -webkit-transform: translate3d(-1646px, 1124px, 171px);
          transform: translate3d(-1646px, 1124px, 171px);
}

.star:nth-child(394) {
  -webkit-transform: translate3d(1904px, 1274px, 794px);
          transform: translate3d(1904px, 1274px, 794px);
}

.star:nth-child(395) {
  -webkit-transform: translate3d(-638px, 1166px, -1229px);
          transform: translate3d(-638px, 1166px, -1229px);
}

.star:nth-child(396) {
  -webkit-transform: translate3d(-1837px, -727px, -1008px);
          transform: translate3d(-1837px, -727px, -1008px);
}

.star:nth-child(397) {
  -webkit-transform: translate3d(-1961px, 760px, -1789px);
          transform: translate3d(-1961px, 760px, -1789px);
}

.star:nth-child(398) {
  -webkit-transform: translate3d(-1415px, -991px, -1236px);
          transform: translate3d(-1415px, -991px, -1236px);
}

.star:nth-child(399) {
  -webkit-transform: translate3d(-104px, 1756px, -1944px);
          transform: translate3d(-104px, 1756px, -1944px);
}

.star:nth-child(400) {
  -webkit-transform: translate3d(-1757px, 832px, 1110px);
          transform: translate3d(-1757px, 832px, 1110px);
}

.star:nth-child(401) {
  -webkit-transform: translate3d(-52px, 181px, -1994px);
          transform: translate3d(-52px, 181px, -1994px);
}

.star:nth-child(402) {
  -webkit-transform: translate3d(-1634px, -1328px, -286px);
          transform: translate3d(-1634px, -1328px, -286px);
}

.star:nth-child(403) {
  -webkit-transform: translate3d(160px, -1123px, -131px);
          transform: translate3d(160px, -1123px, -131px);
}

.star:nth-child(404) {
  -webkit-transform: translate3d(1448px, 851px, -1446px);
          transform: translate3d(1448px, 851px, -1446px);
}

.star:nth-child(405) {
  -webkit-transform: translate3d(-1670px, -1744px, -1405px);
          transform: translate3d(-1670px, -1744px, -1405px);
}

.star:nth-child(406) {
  -webkit-transform: translate3d(-147px, 316px, -1219px);
          transform: translate3d(-147px, 316px, -1219px);
}

.star:nth-child(407) {
  -webkit-transform: translate3d(1295px, 450px, 1596px);
          transform: translate3d(1295px, 450px, 1596px);
}

.star:nth-child(408) {
  -webkit-transform: translate3d(781px, 127px, 1879px);
          transform: translate3d(781px, 127px, 1879px);
}

.star:nth-child(409) {
  -webkit-transform: translate3d(-1895px, 322px, 472px);
          transform: translate3d(-1895px, 322px, 472px);
}

.star:nth-child(410) {
  -webkit-transform: translate3d(1666px, -86px, -1659px);
          transform: translate3d(1666px, -86px, -1659px);
}

.star:nth-child(411) {
  -webkit-transform: translate3d(1016px, 283px, 1890px);
          transform: translate3d(1016px, 283px, 1890px);
}

.star:nth-child(412) {
  -webkit-transform: translate3d(-2px, 1945px, -1375px);
          transform: translate3d(-2px, 1945px, -1375px);
}

.star:nth-child(413) {
  -webkit-transform: translate3d(1677px, 1885px, 1893px);
          transform: translate3d(1677px, 1885px, 1893px);
}

.star:nth-child(414) {
  -webkit-transform: translate3d(-1919px, 1726px, -228px);
          transform: translate3d(-1919px, 1726px, -228px);
}

.star:nth-child(415) {
  -webkit-transform: translate3d(667px, -3px, 1327px);
          transform: translate3d(667px, -3px, 1327px);
}

.star:nth-child(416) {
  -webkit-transform: translate3d(-1051px, -1803px, 244px);
          transform: translate3d(-1051px, -1803px, 244px);
}

.star:nth-child(417) {
  -webkit-transform: translate3d(-1784px, 974px, -976px);
          transform: translate3d(-1784px, 974px, -976px);
}

.star:nth-child(418) {
  -webkit-transform: translate3d(798px, -1247px, -1754px);
          transform: translate3d(798px, -1247px, -1754px);
}

.star:nth-child(419) {
  -webkit-transform: translate3d(-1251px, -1716px, 639px);
          transform: translate3d(-1251px, -1716px, 639px);
}

.star:nth-child(420) {
  -webkit-transform: translate3d(937px, -1179px, 1759px);
          transform: translate3d(937px, -1179px, 1759px);
}

.star:nth-child(421) {
  -webkit-transform: translate3d(851px, -1096px, -1600px);
          transform: translate3d(851px, -1096px, -1600px);
}

.star:nth-child(422) {
  -webkit-transform: translate3d(-1920px, -1765px, -279px);
          transform: translate3d(-1920px, -1765px, -279px);
}

.star:nth-child(423) {
  -webkit-transform: translate3d(1325px, -123px, 611px);
          transform: translate3d(1325px, -123px, 611px);
}

.star:nth-child(424) {
  -webkit-transform: translate3d(-1609px, -1326px, 1281px);
          transform: translate3d(-1609px, -1326px, 1281px);
}

.star:nth-child(425) {
  -webkit-transform: translate3d(1805px, -731px, 126px);
          transform: translate3d(1805px, -731px, 126px);
}

.star:nth-child(426) {
  -webkit-transform: translate3d(510px, -391px, 1598px);
          transform: translate3d(510px, -391px, 1598px);
}

.star:nth-child(427) {
  -webkit-transform: translate3d(-107px, 175px, -291px);
          transform: translate3d(-107px, 175px, -291px);
}

.star:nth-child(428) {
  -webkit-transform: translate3d(-906px, 1775px, 1683px);
          transform: translate3d(-906px, 1775px, 1683px);
}

.star:nth-child(429) {
  -webkit-transform: translate3d(-1123px, 1882px, 4px);
          transform: translate3d(-1123px, 1882px, 4px);
}

.star:nth-child(430) {
  -webkit-transform: translate3d(-1441px, 365px, 977px);
          transform: translate3d(-1441px, 365px, 977px);
}

.star:nth-child(431) {
  -webkit-transform: translate3d(-611px, 1890px, 1942px);
          transform: translate3d(-611px, 1890px, 1942px);
}

.star:nth-child(432) {
  -webkit-transform: translate3d(-1548px, 306px, -501px);
          transform: translate3d(-1548px, 306px, -501px);
}

.star:nth-child(433) {
  -webkit-transform: translate3d(-116px, -175px, -573px);
          transform: translate3d(-116px, -175px, -573px);
}

.star:nth-child(434) {
  -webkit-transform: translate3d(-1121px, 1275px, 1035px);
          transform: translate3d(-1121px, 1275px, 1035px);
}

.star:nth-child(435) {
  -webkit-transform: translate3d(1851px, -1849px, 1652px);
          transform: translate3d(1851px, -1849px, 1652px);
}

.star:nth-child(436) {
  -webkit-transform: translate3d(441px, -341px, -261px);
          transform: translate3d(441px, -341px, -261px);
}

.star:nth-child(437) {
  -webkit-transform: translate3d(-1892px, -1488px, 1970px);
          transform: translate3d(-1892px, -1488px, 1970px);
}

.star:nth-child(438) {
  -webkit-transform: translate3d(-443px, -758px, 977px);
          transform: translate3d(-443px, -758px, 977px);
}

.star:nth-child(439) {
  -webkit-transform: translate3d(69px, 186px, -1729px);
          transform: translate3d(69px, 186px, -1729px);
}

.star:nth-child(440) {
  -webkit-transform: translate3d(1883px, 778px, -1344px);
          transform: translate3d(1883px, 778px, -1344px);
}

.star:nth-child(441) {
  -webkit-transform: translate3d(874px, 1490px, 284px);
          transform: translate3d(874px, 1490px, 284px);
}

.star:nth-child(442) {
  -webkit-transform: translate3d(-1437px, 813px, -1207px);
          transform: translate3d(-1437px, 813px, -1207px);
}

.star:nth-child(443) {
  -webkit-transform: translate3d(-1804px, -601px, 1979px);
          transform: translate3d(-1804px, -601px, 1979px);
}

.star:nth-child(444) {
  -webkit-transform: translate3d(41px, -718px, 533px);
          transform: translate3d(41px, -718px, 533px);
}

.star:nth-child(445) {
  -webkit-transform: translate3d(-729px, -853px, -1201px);
          transform: translate3d(-729px, -853px, -1201px);
}

.star:nth-child(446) {
  -webkit-transform: translate3d(-1414px, 55px, -1481px);
          transform: translate3d(-1414px, 55px, -1481px);
}

.star:nth-child(447) {
  -webkit-transform: translate3d(244px, 227px, 1917px);
          transform: translate3d(244px, 227px, 1917px);
}

.star:nth-child(448) {
  -webkit-transform: translate3d(857px, 1003px, -1641px);
          transform: translate3d(857px, 1003px, -1641px);
}

.star:nth-child(449) {
  -webkit-transform: translate3d(-1704px, 275px, -1255px);
          transform: translate3d(-1704px, 275px, -1255px);
}

.star:nth-child(450) {
  -webkit-transform: translate3d(-425px, -1343px, 1662px);
          transform: translate3d(-425px, -1343px, 1662px);
}

.star:nth-child(451) {
  -webkit-transform: translate3d(338px, -1269px, 1830px);
          transform: translate3d(338px, -1269px, 1830px);
}

.star:nth-child(452) {
  -webkit-transform: translate3d(432px, -1429px, 1899px);
          transform: translate3d(432px, -1429px, 1899px);
}

.star:nth-child(453) {
  -webkit-transform: translate3d(1985px, -1210px, 1170px);
          transform: translate3d(1985px, -1210px, 1170px);
}

.star:nth-child(454) {
  -webkit-transform: translate3d(-1253px, 814px, -334px);
          transform: translate3d(-1253px, 814px, -334px);
}

.star:nth-child(455) {
  -webkit-transform: translate3d(-350px, -139px, -1105px);
          transform: translate3d(-350px, -139px, -1105px);
}

.star:nth-child(456) {
  -webkit-transform: translate3d(1457px, 1879px, 1585px);
          transform: translate3d(1457px, 1879px, 1585px);
}

.star:nth-child(457) {
  -webkit-transform: translate3d(14px, -1673px, 634px);
          transform: translate3d(14px, -1673px, 634px);
}

.star:nth-child(458) {
  -webkit-transform: translate3d(-75px, 1975px, 1959px);
          transform: translate3d(-75px, 1975px, 1959px);
}

.star:nth-child(459) {
  -webkit-transform: translate3d(1804px, -1663px, -349px);
          transform: translate3d(1804px, -1663px, -349px);
}

.star:nth-child(460) {
  -webkit-transform: translate3d(-414px, 853px, 459px);
          transform: translate3d(-414px, 853px, 459px);
}

.star:nth-child(461) {
  -webkit-transform: translate3d(388px, 1123px, 636px);
          transform: translate3d(388px, 1123px, 636px);
}

.star:nth-child(462) {
  -webkit-transform: translate3d(-1407px, -428px, -1933px);
          transform: translate3d(-1407px, -428px, -1933px);
}

.star:nth-child(463) {
  -webkit-transform: translate3d(1105px, 1460px, -823px);
          transform: translate3d(1105px, 1460px, -823px);
}

.star:nth-child(464) {
  -webkit-transform: translate3d(-1358px, -925px, 510px);
          transform: translate3d(-1358px, -925px, 510px);
}

.star:nth-child(465) {
  -webkit-transform: translate3d(-258px, -1293px, 1351px);
          transform: translate3d(-258px, -1293px, 1351px);
}

.star:nth-child(466) {
  -webkit-transform: translate3d(-325px, 565px, 1911px);
          transform: translate3d(-325px, 565px, 1911px);
}

.star:nth-child(467) {
  -webkit-transform: translate3d(802px, 802px, 1993px);
          transform: translate3d(802px, 802px, 1993px);
}

.star:nth-child(468) {
  -webkit-transform: translate3d(1392px, 406px, 684px);
          transform: translate3d(1392px, 406px, 684px);
}

.star:nth-child(469) {
  -webkit-transform: translate3d(-1998px, -1264px, 1300px);
          transform: translate3d(-1998px, -1264px, 1300px);
}

.star:nth-child(470) {
  -webkit-transform: translate3d(-1838px, 705px, -1327px);
          transform: translate3d(-1838px, 705px, -1327px);
}

.star:nth-child(471) {
  -webkit-transform: translate3d(415px, 1104px, -1214px);
          transform: translate3d(415px, 1104px, -1214px);
}

.star:nth-child(472) {
  -webkit-transform: translate3d(1099px, -956px, 159px);
          transform: translate3d(1099px, -956px, 159px);
}

.star:nth-child(473) {
  -webkit-transform: translate3d(-1239px, -866px, -362px);
          transform: translate3d(-1239px, -866px, -362px);
}

.star:nth-child(474) {
  -webkit-transform: translate3d(1085px, 1959px, -1649px);
          transform: translate3d(1085px, 1959px, -1649px);
}

.star:nth-child(475) {
  -webkit-transform: translate3d(1223px, 182px, -1670px);
          transform: translate3d(1223px, 182px, -1670px);
}

.star:nth-child(476) {
  -webkit-transform: translate3d(1071px, -64px, -1432px);
          transform: translate3d(1071px, -64px, -1432px);
}

.star:nth-child(477) {
  -webkit-transform: translate3d(605px, 237px, 395px);
          transform: translate3d(605px, 237px, 395px);
}

.star:nth-child(478) {
  -webkit-transform: translate3d(-387px, 20px, 1794px);
          transform: translate3d(-387px, 20px, 1794px);
}

.star:nth-child(479) {
  -webkit-transform: translate3d(-970px, 1046px, -127px);
          transform: translate3d(-970px, 1046px, -127px);
}

.star:nth-child(480) {
  -webkit-transform: translate3d(-60px, -832px, 1641px);
          transform: translate3d(-60px, -832px, 1641px);
}

.star:nth-child(481) {
  -webkit-transform: translate3d(488px, -559px, -1132px);
          transform: translate3d(488px, -559px, -1132px);
}

.star:nth-child(482) {
  -webkit-transform: translate3d(-1328px, 1544px, 1860px);
          transform: translate3d(-1328px, 1544px, 1860px);
}

.star:nth-child(483) {
  -webkit-transform: translate3d(1837px, 1016px, 149px);
          transform: translate3d(1837px, 1016px, 149px);
}

.star:nth-child(484) {
  -webkit-transform: translate3d(904px, -31px, -333px);
          transform: translate3d(904px, -31px, -333px);
}

.star:nth-child(485) {
  -webkit-transform: translate3d(-79px, 1165px, -209px);
          transform: translate3d(-79px, 1165px, -209px);
}

.star:nth-child(486) {
  -webkit-transform: translate3d(1982px, 1791px, -1778px);
          transform: translate3d(1982px, 1791px, -1778px);
}

.star:nth-child(487) {
  -webkit-transform: translate3d(-1103px, 1701px, -1826px);
          transform: translate3d(-1103px, 1701px, -1826px);
}

.star:nth-child(488) {
  -webkit-transform: translate3d(70px, -994px, -1666px);
          transform: translate3d(70px, -994px, -1666px);
}

.star:nth-child(489) {
  -webkit-transform: translate3d(-1480px, 1168px, 1673px);
          transform: translate3d(-1480px, 1168px, 1673px);
}

.star:nth-child(490) {
  -webkit-transform: translate3d(281px, 965px, -963px);
          transform: translate3d(281px, 965px, -963px);
}

.star:nth-child(491) {
  -webkit-transform: translate3d(619px, -594px, -583px);
          transform: translate3d(619px, -594px, -583px);
}

.star:nth-child(492) {
  -webkit-transform: translate3d(-1878px, -1598px, -1785px);
          transform: translate3d(-1878px, -1598px, -1785px);
}

.star:nth-child(493) {
  -webkit-transform: translate3d(-586px, 1732px, 304px);
          transform: translate3d(-586px, 1732px, 304px);
}

.star:nth-child(494) {
  -webkit-transform: translate3d(-341px, -1835px, 1036px);
          transform: translate3d(-341px, -1835px, 1036px);
}

.star:nth-child(495) {
  -webkit-transform: translate3d(675px, 1023px, 385px);
          transform: translate3d(675px, 1023px, 385px);
}

.star:nth-child(496) {
  -webkit-transform: translate3d(-1896px, -726px, 504px);
          transform: translate3d(-1896px, -726px, 504px);
}

.star:nth-child(497) {
  -webkit-transform: translate3d(-1590px, 637px, -1595px);
          transform: translate3d(-1590px, 637px, -1595px);
}

.star:nth-child(498) {
  -webkit-transform: translate3d(990px, 773px, 1920px);
          transform: translate3d(990px, 773px, 1920px);
}

.star:nth-child(499) {
  -webkit-transform: translate3d(1453px, 1895px, -73px);
          transform: translate3d(1453px, 1895px, -73px);
}

.star:nth-child(500) {
  -webkit-transform: translate3d(720px, 656px, 116px);
          transform: translate3d(720px, 656px, 116px);
}

.star:nth-child(501) {
  -webkit-transform: translate3d(-941px, 923px, -940px);
          transform: translate3d(-941px, 923px, -940px);
}

.star:nth-child(502) {
  -webkit-transform: translate3d(-158px, -116px, 877px);
          transform: translate3d(-158px, -116px, 877px);
}

.star:nth-child(503) {
  -webkit-transform: translate3d(-631px, -1531px, 1276px);
          transform: translate3d(-631px, -1531px, 1276px);
}

.star:nth-child(504) {
  -webkit-transform: translate3d(-412px, -245px, 1425px);
          transform: translate3d(-412px, -245px, 1425px);
}

.star:nth-child(505) {
  -webkit-transform: translate3d(39px, -1687px, 538px);
          transform: translate3d(39px, -1687px, 538px);
}

.star:nth-child(506) {
  -webkit-transform: translate3d(234px, 515px, -1256px);
          transform: translate3d(234px, 515px, -1256px);
}

.star:nth-child(507) {
  -webkit-transform: translate3d(1472px, 1892px, -1605px);
          transform: translate3d(1472px, 1892px, -1605px);
}

.star:nth-child(508) {
  -webkit-transform: translate3d(-1746px, -1974px, 489px);
          transform: translate3d(-1746px, -1974px, 489px);
}

.star:nth-child(509) {
  -webkit-transform: translate3d(289px, 672px, 114px);
          transform: translate3d(289px, 672px, 114px);
}

.star:nth-child(510) {
  -webkit-transform: translate3d(-294px, -1345px, -298px);
          transform: translate3d(-294px, -1345px, -298px);
}

.star:nth-child(511) {
  -webkit-transform: translate3d(-1399px, 1913px, -308px);
          transform: translate3d(-1399px, 1913px, -308px);
}

.star:nth-child(512) {
  -webkit-transform: translate3d(134px, 606px, 694px);
          transform: translate3d(134px, 606px, 694px);
}

.star:nth-child(513) {
  -webkit-transform: translate3d(-520px, -1174px, 167px);
          transform: translate3d(-520px, -1174px, 167px);
}

.star:nth-child(514) {
  -webkit-transform: translate3d(990px, -1876px, -692px);
          transform: translate3d(990px, -1876px, -692px);
}

.star:nth-child(515) {
  -webkit-transform: translate3d(-576px, 949px, 380px);
          transform: translate3d(-576px, 949px, 380px);
}

.star:nth-child(516) {
  -webkit-transform: translate3d(-401px, -1928px, -1795px);
          transform: translate3d(-401px, -1928px, -1795px);
}

.star:nth-child(517) {
  -webkit-transform: translate3d(-1012px, -926px, -356px);
          transform: translate3d(-1012px, -926px, -356px);
}

.star:nth-child(518) {
  -webkit-transform: translate3d(449px, -114px, -1907px);
          transform: translate3d(449px, -114px, -1907px);
}

.star:nth-child(519) {
  -webkit-transform: translate3d(-1477px, -343px, -1003px);
          transform: translate3d(-1477px, -343px, -1003px);
}

.star:nth-child(520) {
  -webkit-transform: translate3d(-1863px, -476px, 968px);
          transform: translate3d(-1863px, -476px, 968px);
}

.star:nth-child(521) {
  -webkit-transform: translate3d(1732px, -1266px, 1541px);
          transform: translate3d(1732px, -1266px, 1541px);
}

.star:nth-child(522) {
  -webkit-transform: translate3d(-1379px, -380px, -941px);
          transform: translate3d(-1379px, -380px, -941px);
}

.star:nth-child(523) {
  -webkit-transform: translate3d(-908px, -1771px, -1618px);
          transform: translate3d(-908px, -1771px, -1618px);
}

.star:nth-child(524) {
  -webkit-transform: translate3d(432px, 880px, -742px);
          transform: translate3d(432px, 880px, -742px);
}

.star:nth-child(525) {
  -webkit-transform: translate3d(1554px, -1266px, -1115px);
          transform: translate3d(1554px, -1266px, -1115px);
}

.star:nth-child(526) {
  -webkit-transform: translate3d(-1499px, -429px, -1884px);
          transform: translate3d(-1499px, -429px, -1884px);
}

.star:nth-child(527) {
  -webkit-transform: translate3d(-747px, -1501px, -1857px);
          transform: translate3d(-747px, -1501px, -1857px);
}

.star:nth-child(528) {
  -webkit-transform: translate3d(-1082px, 1518px, 1307px);
          transform: translate3d(-1082px, 1518px, 1307px);
}

.star:nth-child(529) {
  -webkit-transform: translate3d(1804px, 1481px, -440px);
          transform: translate3d(1804px, 1481px, -440px);
}

.star:nth-child(530) {
  -webkit-transform: translate3d(456px, 1029px, -1335px);
          transform: translate3d(456px, 1029px, -1335px);
}

.star:nth-child(531) {
  -webkit-transform: translate3d(1001px, -1256px, -195px);
          transform: translate3d(1001px, -1256px, -195px);
}

.star:nth-child(532) {
  -webkit-transform: translate3d(-603px, -607px, -165px);
          transform: translate3d(-603px, -607px, -165px);
}

.star:nth-child(533) {
  -webkit-transform: translate3d(720px, 430px, 1652px);
          transform: translate3d(720px, 430px, 1652px);
}

.star:nth-child(534) {
  -webkit-transform: translate3d(101px, 232px, 1998px);
          transform: translate3d(101px, 232px, 1998px);
}

.star:nth-child(535) {
  -webkit-transform: translate3d(-96px, 62px, -110px);
          transform: translate3d(-96px, 62px, -110px);
}

.star:nth-child(536) {
  -webkit-transform: translate3d(528px, 857px, 201px);
          transform: translate3d(528px, 857px, 201px);
}

.star:nth-child(537) {
  -webkit-transform: translate3d(932px, -1378px, -1193px);
          transform: translate3d(932px, -1378px, -1193px);
}

.star:nth-child(538) {
  -webkit-transform: translate3d(-364px, -981px, 1123px);
          transform: translate3d(-364px, -981px, 1123px);
}

.star:nth-child(539) {
  -webkit-transform: translate3d(-710px, -1653px, 1354px);
          transform: translate3d(-710px, -1653px, 1354px);
}

.star:nth-child(540) {
  -webkit-transform: translate3d(904px, 1116px, 442px);
          transform: translate3d(904px, 1116px, 442px);
}

.star:nth-child(541) {
  -webkit-transform: translate3d(-996px, 1422px, -1944px);
          transform: translate3d(-996px, 1422px, -1944px);
}

.star:nth-child(542) {
  -webkit-transform: translate3d(410px, -858px, -1693px);
          transform: translate3d(410px, -858px, -1693px);
}

.star:nth-child(543) {
  -webkit-transform: translate3d(-60px, -1228px, 13px);
          transform: translate3d(-60px, -1228px, 13px);
}

.star:nth-child(544) {
  -webkit-transform: translate3d(-1233px, -857px, -1007px);
          transform: translate3d(-1233px, -857px, -1007px);
}

.star:nth-child(545) {
  -webkit-transform: translate3d(-172px, 787px, -1987px);
          transform: translate3d(-172px, 787px, -1987px);
}

.star:nth-child(546) {
  -webkit-transform: translate3d(-964px, 635px, 351px);
          transform: translate3d(-964px, 635px, 351px);
}

.star:nth-child(547) {
  -webkit-transform: translate3d(365px, 1391px, -899px);
          transform: translate3d(365px, 1391px, -899px);
}

.star:nth-child(548) {
  -webkit-transform: translate3d(-1264px, 1305px, 987px);
          transform: translate3d(-1264px, 1305px, 987px);
}

.star:nth-child(549) {
  -webkit-transform: translate3d(-790px, -288px, -1945px);
          transform: translate3d(-790px, -288px, -1945px);
}

.star:nth-child(550) {
  -webkit-transform: translate3d(928px, 879px, -351px);
          transform: translate3d(928px, 879px, -351px);
}

.star:nth-child(551) {
  -webkit-transform: translate3d(1520px, -765px, -192px);
          transform: translate3d(1520px, -765px, -192px);
}

.star:nth-child(552) {
  -webkit-transform: translate3d(-1248px, 349px, -946px);
          transform: translate3d(-1248px, 349px, -946px);
}

.star:nth-child(553) {
  -webkit-transform: translate3d(-805px, -632px, -215px);
          transform: translate3d(-805px, -632px, -215px);
}

.star:nth-child(554) {
  -webkit-transform: translate3d(487px, -318px, -79px);
          transform: translate3d(487px, -318px, -79px);
}

.star:nth-child(555) {
  -webkit-transform: translate3d(601px, 1460px, 1867px);
          transform: translate3d(601px, 1460px, 1867px);
}

.star:nth-child(556) {
  -webkit-transform: translate3d(324px, -493px, 424px);
          transform: translate3d(324px, -493px, 424px);
}

.star:nth-child(557) {
  -webkit-transform: translate3d(-1086px, 1762px, 128px);
          transform: translate3d(-1086px, 1762px, 128px);
}

.star:nth-child(558) {
  -webkit-transform: translate3d(177px, 1705px, -7px);
          transform: translate3d(177px, 1705px, -7px);
}

.star:nth-child(559) {
  -webkit-transform: translate3d(-1372px, 656px, -827px);
          transform: translate3d(-1372px, 656px, -827px);
}

.star:nth-child(560) {
  -webkit-transform: translate3d(-1389px, -876px, -1880px);
          transform: translate3d(-1389px, -876px, -1880px);
}

.star:nth-child(561) {
  -webkit-transform: translate3d(327px, 1053px, -421px);
          transform: translate3d(327px, 1053px, -421px);
}

.star:nth-child(562) {
  -webkit-transform: translate3d(-564px, -333px, 1343px);
          transform: translate3d(-564px, -333px, 1343px);
}

.star:nth-child(563) {
  -webkit-transform: translate3d(-1534px, 1767px, -97px);
          transform: translate3d(-1534px, 1767px, -97px);
}

.star:nth-child(564) {
  -webkit-transform: translate3d(1693px, 1238px, -1802px);
          transform: translate3d(1693px, 1238px, -1802px);
}

.star:nth-child(565) {
  -webkit-transform: translate3d(-899px, 194px, -1056px);
          transform: translate3d(-899px, 194px, -1056px);
}

.star:nth-child(566) {
  -webkit-transform: translate3d(305px, 1670px, 1072px);
          transform: translate3d(305px, 1670px, 1072px);
}

.star:nth-child(567) {
  -webkit-transform: translate3d(1258px, 432px, 1927px);
          transform: translate3d(1258px, 432px, 1927px);
}

.star:nth-child(568) {
  -webkit-transform: translate3d(-199px, 1828px, 1209px);
          transform: translate3d(-199px, 1828px, 1209px);
}

.star:nth-child(569) {
  -webkit-transform: translate3d(-1778px, -1499px, 735px);
          transform: translate3d(-1778px, -1499px, 735px);
}

.star:nth-child(570) {
  -webkit-transform: translate3d(-1108px, -1003px, -808px);
          transform: translate3d(-1108px, -1003px, -808px);
}

.star:nth-child(571) {
  -webkit-transform: translate3d(-648px, 1288px, 641px);
          transform: translate3d(-648px, 1288px, 641px);
}

.star:nth-child(572) {
  -webkit-transform: translate3d(-1946px, 1603px, -617px);
          transform: translate3d(-1946px, 1603px, -617px);
}

.star:nth-child(573) {
  -webkit-transform: translate3d(918px, -1215px, -1405px);
          transform: translate3d(918px, -1215px, -1405px);
}

.star:nth-child(574) {
  -webkit-transform: translate3d(1650px, -1006px, -158px);
          transform: translate3d(1650px, -1006px, -158px);
}

.star:nth-child(575) {
  -webkit-transform: translate3d(-1465px, 985px, 73px);
          transform: translate3d(-1465px, 985px, 73px);
}

.star:nth-child(576) {
  -webkit-transform: translate3d(-754px, 1510px, 249px);
          transform: translate3d(-754px, 1510px, 249px);
}

.star:nth-child(577) {
  -webkit-transform: translate3d(1931px, -838px, -1064px);
          transform: translate3d(1931px, -838px, -1064px);
}

.star:nth-child(578) {
  -webkit-transform: translate3d(1662px, -675px, 61px);
          transform: translate3d(1662px, -675px, 61px);
}

.star:nth-child(579) {
  -webkit-transform: translate3d(-1071px, 892px, -1496px);
          transform: translate3d(-1071px, 892px, -1496px);
}

.star:nth-child(580) {
  -webkit-transform: translate3d(-1880px, 1192px, -1994px);
          transform: translate3d(-1880px, 1192px, -1994px);
}

.star:nth-child(581) {
  -webkit-transform: translate3d(-315px, 1131px, 1046px);
          transform: translate3d(-315px, 1131px, 1046px);
}

.star:nth-child(582) {
  -webkit-transform: translate3d(-566px, -1263px, -169px);
          transform: translate3d(-566px, -1263px, -169px);
}

.star:nth-child(583) {
  -webkit-transform: translate3d(-1371px, -66px, 103px);
          transform: translate3d(-1371px, -66px, 103px);
}

.star:nth-child(584) {
  -webkit-transform: translate3d(-1292px, 1423px, 307px);
          transform: translate3d(-1292px, 1423px, 307px);
}

.star:nth-child(585) {
  -webkit-transform: translate3d(-157px, 798px, 788px);
          transform: translate3d(-157px, 798px, 788px);
}

.star:nth-child(586) {
  -webkit-transform: translate3d(-971px, -1322px, -307px);
          transform: translate3d(-971px, -1322px, -307px);
}

.star:nth-child(587) {
  -webkit-transform: translate3d(-280px, 965px, -742px);
          transform: translate3d(-280px, 965px, -742px);
}

.star:nth-child(588) {
  -webkit-transform: translate3d(1694px, 1502px, 997px);
          transform: translate3d(1694px, 1502px, 997px);
}

.star:nth-child(589) {
  -webkit-transform: translate3d(354px, 468px, -1781px);
          transform: translate3d(354px, 468px, -1781px);
}

.star:nth-child(590) {
  -webkit-transform: translate3d(932px, -352px, 331px);
          transform: translate3d(932px, -352px, 331px);
}

.star:nth-child(591) {
  -webkit-transform: translate3d(662px, 1856px, -1910px);
          transform: translate3d(662px, 1856px, -1910px);
}

.star:nth-child(592) {
  -webkit-transform: translate3d(730px, 442px, 637px);
          transform: translate3d(730px, 442px, 637px);
}

.star:nth-child(593) {
  -webkit-transform: translate3d(-1015px, 941px, -1484px);
          transform: translate3d(-1015px, 941px, -1484px);
}

.star:nth-child(594) {
  -webkit-transform: translate3d(-1684px, 468px, 947px);
          transform: translate3d(-1684px, 468px, 947px);
}

.star:nth-child(595) {
  -webkit-transform: translate3d(-43px, 1255px, -1474px);
          transform: translate3d(-43px, 1255px, -1474px);
}

.star:nth-child(596) {
  -webkit-transform: translate3d(972px, -670px, -1145px);
          transform: translate3d(972px, -670px, -1145px);
}

.star:nth-child(597) {
  -webkit-transform: translate3d(-860px, 394px, 852px);
          transform: translate3d(-860px, 394px, 852px);
}

.star:nth-child(598) {
  -webkit-transform: translate3d(-763px, 1281px, 1999px);
          transform: translate3d(-763px, 1281px, 1999px);
}

.star:nth-child(599) {
  -webkit-transform: translate3d(-1306px, -1799px, 167px);
          transform: translate3d(-1306px, -1799px, 167px);
}

.star:nth-child(600) {
  -webkit-transform: translate3d(-824px, -1624px, -348px);
          transform: translate3d(-824px, -1624px, -348px);
}


  `]
})
export class HeavyComputeComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 3000; i++) {
      document.createElement('div');
      console.log('processing:🔥🔥 ngOnInit 🔥🔥');
    }
  }

  ngAfterViewInit() {
    for (let i = 0; i < 3000; i++) {
      document.createElement('div');
      console.log('processing:🔥🔥 ngAfterViewInit 🔥🔥');
    }
  }
}


@NgModule({
  declarations: [HeavyComputeComponent],
  imports: [],
  exports: [HeavyComputeComponent],
  providers: [HeavyComputeComponent],
  bootstrap: [HeavyComputeComponent]
})
export class HeavyComputeModule { }
