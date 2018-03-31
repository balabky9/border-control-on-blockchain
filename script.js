/**
* @Author: Bala
**/

/**
 * A sample Immigration Script API to submit a passenger departure transaction.
 * A dummy endorsement function is shown. This is just to model it like a hyperledger endorsement returning from 
 * a chaincode running at a hyperledger endorsement peer. 
 */
function getEndorsement(tx){
  //check tx and passenger records in a real life scenario before endorsing. 
  return "Departure Granted"; 
}


function Depart(tx) {

   

    // Update the asset with the new value.
    tx.p.depStatus = getEndorsement(tx);
  	tx.endorsers.push("0709"); //Represents the endorser agency ID. 

    // Get the asset registry for the asset.
    return getAssetRegistry('org.india.immigration.Passenger')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.p);

        });
        

}
