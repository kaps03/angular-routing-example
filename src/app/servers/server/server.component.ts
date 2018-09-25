import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: [ './server.component.css' ],
})
export class ServerComponent implements OnInit {
    server: { id: number, name: string, status: string };

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
        // I committed them out below to use resolver to do this job
        this.route.data
            .subscribe(
                (data: Data) => {
                    // this name should be same with the name of the resolver data name usage
                    this.server = data['server'];
                },
            );

        // const id = +this.route.params['id'];
        //
        // this.server = this.serversService.getServer(id);
        //
        // this.route.params
        //     .subscribe(
        //         (params: Params) => {
        //             this.server = this.serversService.getServer(+params['id']);
        //         },
        //     );
    }

    onEdit() {
        // tell Angular which route you want to navigate relatively
        this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    }

}
