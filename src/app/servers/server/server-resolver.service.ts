import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ServersService } from '../servers.service';

export interface ServerRouterResponse {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolverService implements Resolve<ServerRouterResponse> {
    constructor(
        private serversService: ServersService,
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<ServerRouterResponse> | Promise<ServerRouterResponse> | ServerRouterResponse {
        return this.serversService.getServer(+route.params['id']);
    }
}
