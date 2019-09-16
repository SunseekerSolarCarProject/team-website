import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Config } from '../../interfaces/config';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-edit-table',
    templateUrl: './edit-table.component.html',
    styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {

    @Input() config: Config[] = [];
    @Input()
    set tableData(data) {
        data.forEach(row => {
            (this.form.get('data') as FormArray).push(this.createGroup(row));
        });
    }

    @Output() createRow = new EventEmitter<any>();
    @Output() editRow = new EventEmitter<any>();

    tableKeys: string[];

    form = this.fb.group({
        data: this.fb.array([])
    });

    constructor(
        private fb: FormBuilder,
        private dbService: DatabaseService
    ) { }

    ngOnInit() {
        this.tableKeys = this.config.map(item => item.id);
    }


    private createGroup(data = {}): FormGroup {
        const group = this.fb.group([]);
        this.config.forEach(item => {
            const control = new FormControl('');
            group.addControl(item.id, control);
            if (item.type === 'time' && data[item.id]) {
                data[item.id] = this.toTime(new Date(data[item.id].toDate()));
            }
            if (item.id === 'id') {
                group.setValidators(Validators.required);
            }
        });
        group.patchValue(data);
        return group;
    }

    toTime(date: Date): String {
        return `${date.getHours()}:${date.getMinutes() === 0 ? date.getMinutes() + '0' : date.getMinutes()}`;
    }

    isDisabled(index: number) {
        const item = (this.form.get('data') as FormArray).at(index);
        if (item) {
            return !item.dirty;
        }
        return false;
    }

    edit(index: number) {
        const row = (this.form.get('data') as FormArray).at(index);
        if (row.valid) {
            this.editRow.emit(row.value);
        }
    }

    create(index: number) {
        const row = (this.form.get('data') as FormArray).at(index);
        if (row.valid) {
            this.createRow.emit(row.value);
        }
    }

}
