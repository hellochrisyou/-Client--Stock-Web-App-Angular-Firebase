import { SearchGroup } from '../interface/interface'

export const SEARCHGROUP: SearchGroup[] = [
    // {
    //     name: 'IPO',
    //     option: [
    //         { value: 'upcoming-ipos', viewValue: 'Upcoming' },
    //         { value: 'today-ipos', viewValue: 'Current' },
    //     ]
    // },
    {
        name: 'List',
        option: [
            { value: 'mostactive', viewValue: 'Most Active' },
            { value: 'gainers', viewValue: 'Gainers' },
            { value: 'losers', viewValue: 'Losers' },
            { value: 'iexvolume', viewValue: 'Volume' },
        ]
    }
];
