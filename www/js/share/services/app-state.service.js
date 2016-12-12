/**
 * @name appStateService
 * @author Morteza Tavanarad
 * @contributors []
 * @since 05/02/2016
 * @copyright Binary Ltd
 * Keeping state of the app in this factory
 */

angular
    .module('binary')
    .factory('appStateService',
            function(){
                var factory = {};
                factory.tradeMode = true;
                factory.purchaseMode = false;
                factory.isLoggedin=false;
                factory.waitForProposal = false;
                factory.scopes = [];
                factory.invalidTokenRemoved = false;
                factory.isChangedAccount = false;
                factory.profitTableChangedAccount = false;
                factory.statementChangedAccount = false;
                factory.isRealityChecked = false;
                factory.isPopupOpen = false;
                factory.hasGetResidence = false;
                factory.showForm = false;
                factory.isCheckedAccountType = false;
                factory.isNewAccountReal = false;
                factory.isNewAccountMaltainvest = false;
                factory.hasMLT = false;
                factory.isProfitTableSet = false;
                factory.profitTableRefresh = false;
                factory.isStatementSet = false;
                factory.statementRefresh = false;
                factory.virtuality = 0;
                factory.newAccountAdded = false;
                factory.isLanguageReady = false;

                return factory;
            });
