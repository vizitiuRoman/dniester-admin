import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { STAFFS_API } from '@constants/apis';
import { environment } from '@environments/environment';
import { Staff } from '@models/staff.model';
import { CrudHttpService } from '@services/crud-http.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService extends CrudHttpService<Staff, string> {
    constructor(protected httpClient: HttpClient) {
        super(
            httpClient,
            `${environment.API_URL}/${STAFFS_API.default}`
        );
    }
}
