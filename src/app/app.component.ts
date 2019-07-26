import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
    title = 'nest-pages';

    constructor(private readonly http: HttpClient) {
    }

    ngOnInit(): void {
    }

    getCats(): void {
        this.http.get('/cats', {
            params: {
                name: '王闯',
                password: '123456',
                number: '12345',
                email: 'pt_liangyue@outlook.com',
                cats: 'true',
                numberString: '12346',
            },
        }).subscribe(data => {
            console.log(data);
        });
    }

    postCats(): void {
        this.http.post('/cats/steam', {
            name: '王闯',
            password: '123456',
            number: '12345',
            email: 'pt_liangyue@outlook.com',
            cats: 'true',
            numberString: '12346',
        }).subscribe(data => {
            console.log(data);
        });
    }
}
