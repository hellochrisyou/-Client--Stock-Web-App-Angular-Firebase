import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';


export const CREATE_SEARCH_HEADER = (formBuilder: FormBuilder): FormGroup => {

    const searchForm = formBuilder.group({
        searchOptCtrl: ['', [Validators.required]],
    });
    return searchForm;
};
