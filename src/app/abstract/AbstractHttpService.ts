import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class AbstractHttpService<T, Y> {
  protected constructor(
    public endpoint: string,
    protected readonly http: HttpClient
  ) {
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(`http://localhost:3004/${this.endpoint}`);
  }

  public create(value: Y): Observable<T> {
    return this.http.post<T>(`http://locahost:3004/${this.endpoint}`, value);
  }

  public update(valueId: number, value: Y): Observable<T> {
    return this.http.put<T>(`http://localhost:3004/${this.endpoint}/${valueId}`, value)
  }

  public delete(valueId: number): Observable<unknown> {
    return this.http.delete<unknown>(`http://localhost:3004/${this.endpoint}/${valueId}`)
  }
}
