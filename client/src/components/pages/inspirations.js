import React from 'react';

class Inspiration extends React.Component {
    render(){
        return(
    <div>
    <div data-testid="inspirations-page" className='wrapper'>
    <h1 className='pageHeadings'>Local inspirational stories</h1>
    <div className='sidebar'></div>
    <main>
        <ul className='acc-list'>
             <li className='acc-item'>
                <input className='acc-item-input' type='checkbox' name='accordion' id='item1'/>
                <label htmlFor='item1' className='acc-item-input-heading'>
                <h3 className='acc-h3'> Building a community: The story of Brickworks<span className='acc-list-arrow'>&#9650;
                </span></h3>
                </label>
                <p className='acc-list-content'>
                    The Hanley Crouch Community Association (HCCA) has strong roots in social action and this culture of 'making a difference through social change' remains at our core - stimulating connectivity across our local community and feeding our sustainability. 
                    <br></br>
                    <br></br>
                    The HCCA was established in 1972 by a group of local residents who needed somewhere for their children to play - in a disused building that used to be a public laundry for people living on local estates, which was referred to locally and fondly as 'The Laundry'. Over the past forty years we have successfully facilitated provision of a diverse and inclusive multi-purpose community centre. Now, 'The Laundry' no longer exists but our commitment to grass-roots social action continues through our brand-new, purpose built community centre 'Brickworks'.
                    <br/>
                    <br/>
                    Even before moving into the building we began to foster local relationships and build a sense of power, purpose and capability, so that local people feel that they can make a difference in their neighbourhood. Together with Islington Council we are now exploring how we can work more closely to involve local people in decisions that inpact where they live. We've also trained around 30 local Community Organisers, including local people, volunteers and community-sector workers, as well as staff within the Homes and Communities team in Islington Council.
                    <br/>
                    <br/>
                    We are now supporting local people to develop their own social actions, to increase the sense of power and forge relationships with those providing public services to explore how local people can be more involved in local decision making and how they might better influence service provision.
                </p>
             </li>

             <li className='acc-item'>
                <input className='acc-item-input' type='checkbox' name='accordion' id='item2'/>
                <label htmlFor='item2' className='acc-item-input-heading'>
                <h3 className='acc-h3'>The 'locality' initiative in Tollington<span className='acc-list-arrow'>&#9650;
                </span></h3>
                </label>
                <p className='acc-list-content'>
                Islington Council has chosen the ward of Tollington to explore and develop a 'Locality' initiative that aims to develop, define, and test the 'community' aspect of the Homes and Communities offer. A team of 11 staff from Homes and Communities and key local partner are engaging and collaborating to ensure that Homes and Communities are connected to and knowledgeable about the communities that they work in.
                <br/>
                <br/>
                The first phase of 'Locality' has focused on Insights and Data Gathering, which has revealed some interesting facts and statistics and this combined with the engagement of local organisations, businesses and residents has identified some key areas of concerns linked to poverty, isolation and health and well-being, which are now the key focus for collective social action with Brickworks being developed, supported and promoted as the heart of the community.
                </p>
             </li>
        </ul>
    </main>
    {/* <footer>
        &copy; Brickworks Social Action Community 2018. 
    </footer> */}
       </div>
       </div>
        )}
}

export {Inspiration};