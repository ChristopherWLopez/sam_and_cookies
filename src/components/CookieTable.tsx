//table
//header
//-rows
//--cells td(map hours of the day)
//body
//row(map through locations)
//--cells td
//footer
//row(1)
//--cells td(hourly aggregates)

const hours: string[] = [ "6am","7am","8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"];

const rand = (min: number, max: number): number => Math.floor(Math.random()*(max - min)+ min);

export class CookieStand { 
    // properties on the resulting object
    customersEachHour: number[];
    cookieEachHour: number[];
    totalCookies: number;
    //constructor inits the values
    constructor(
        readonly locationName: string,
        readonly minCustomersPerHour:number,
        readonly maxCustomersPerHour: number,
        readonly avgCookiesPerSale: number 
    ){
        this.customersEachHour = hours.map(()=>
            rand(this.minCustomersPerHour, this.maxCustomersPerHour)
        )

        this.cookieEachHour = this.customersEachHour.map(customers=> Math.floor(customers*this.avgCookiesPerSale));

        this.totalCookies = this.cookieEachHour.reduce((acc, value)=> acc + value, 0)

    }
}

export const CookieTable = ({stores} :{stores:CookieStand[] }) =>(
    <table>
        <thead>
            <tr>
                <th></th>
                {hours.map((hour: string)=> (
                    <th key={hour}>{hour}</th>
                ))}
                <th key="_total"> Daily Total</th>
            </tr>
        </thead>
        <tbody>
            {stores.map((store)=>(
                <tr key={store.locationName}>
                    <td>{store.locationName}</td>
                        {store.cookieEachHour.map((cookies, idx)=>(
                            <td key={idx}>{cookies}</td>
                        ))}
                    <td key="total">{store.totalCookies}</td>
                </tr>
            ))}
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                {hours.map((hour: string, idx: number)=>(
                    <td key={hour}>
                        {stores.reduce((acc, store)=> acc + store.cookieEachHour[idx],0)}
                    </td>
                ))}
                    <td data-testid="total-of-totals">
                        {stores.reduce((acc, store)=> acc + store.totalCookies, 0)}
                    </td>
            </tr>
        </tfoot>
    </table>
);