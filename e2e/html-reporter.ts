import { Reporter, MeasureValues, SampleDescription } from '@angular/benchpress';
import { formatStats } from '@angular/benchpress/src/reporter/util';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import * as fs from 'fs';
import * as path from 'path';

interface Result {
  description: SampleDescription;
  completeSample: MeasureValues[];
  validSamples: MeasureValues[];
}

@Injectable()
export class ReportService {
  static instance = new ReportService();

  private testResults: Result[];

  constructor() {
    const env = jasmine.getEnv();
    (env as any).outputResults = () => { return ReportService.instance.writeResults(); };
    this.testResults = [];
  }
  runComplete(description: SampleDescription, completeSample: MeasureValues[], validSamples: MeasureValues[]) {
    this.testResults.push({
      description,
      completeSample,
      validSamples
    });
  }

  buildHTML(testResults: Result[]): string {

    const template_start = `
       <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Performance Results</title>
          <style>
              body{
                font-family: Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
              }
              table, th, td {
                padding:12px;
                border: 1px solid #000;
              }
              table {
               border-collapse: collapse;
              }
              th {
                background-color: #1E88E5;
                color: #FFF;
              }
              tr:nth-child(even) {
                  background-color: #BBDEFB;
              }
              .stat-table__type-label {
                font-size:10px;
              }
          </style>
        </head>
        <body>
              <table class="stat-table">
            <thead>
              <tr>
                <th>component</th>
                <th>componentBootstrapTime <span class="stat-table__type-label">(ms)</span></th>
                <th>componentStable <span class="stat-table__type-label">ms</span></th>
                <th>ngOnInitTime <span class="stat-table__type-label">ms</span></th>
                <th>ngAfterViewInit <span class="stat-table__type-label">ms</span></th>
                <th>componentSize <span class="stat-table__type-label">Kb</span></th>
              </tr>
            </thead>
            <tbody>
    `;
    const template_end = `
                </tbody>
          </table>
        </body>
        </html>
        `;

    let template = template_start;

    testResults.forEach(result => {
      const size = (result.validSamples[0].values['componentSize'] / 1024).toFixed(2);

      template += `
          <tr>
            <td class="stat-table__component-name">${result.description.id}</td>
            <td>${formatStats(result.validSamples, 'componentBootstrapTime')}</td>
            <td>${formatStats(result.validSamples, 'componentStable')}</td>
            <td>${formatStats(result.validSamples, 'ngOnInitTime')}</td>
            <td>${formatStats(result.validSamples, 'ngAfterViewInit')}</td>
            <td>${size}</td>
          </tr>
        `;
    });

    return template;
  }

  writeResults(): Promise<any> {

    const template = this.buildHTML(this.testResults);

    return new Promise((resolve, reject) => {
      const filePath = path.join(__dirname, 'results');

      fs.mkdirSync(filePath);
      fs.writeFile(`${filePath}/_performance_results_${Date.now()}.html`, template, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}


@Injectable()
export class HTMLReporter extends Reporter {
  constructor(private _description: SampleDescription) {
    super();
  }

  reportMeasureValues(measureValues: MeasureValues): Promise<any> {
    return Promise.resolve(null);
  }

  reportSample(completeSample: MeasureValues[], validSamples: MeasureValues[]): Promise<any> {
    ReportService.instance.runComplete(this._description, completeSample, validSamples);
    return Promise.resolve(null);
  }
}

