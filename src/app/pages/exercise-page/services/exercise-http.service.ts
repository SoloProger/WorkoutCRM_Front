import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ExerciseHttpService {
  constructor(private readonly http: HttpClient) {
  }
}
