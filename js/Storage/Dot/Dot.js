/**
* @author suheeeee<lalune1120@hotmail.com>
*/

define([], function() {
  'use strict';

  /**
   * @class Dot
   */
  function Dot( floor, _x, _y ) {
    /**
    * @memberof Dot
    */
    this.uuid = window.conditions.guid();

    /**
    * @memberof Dot
    */
    this.point = { x : _x, y : _y };

    /**
    * @memberof Dot
    * @desc key : uuid of connected dot<br>value : relation with connected dot, e.g Cell, CellBoundary ...
    */
    this.connects = {};

    /**
    * @memberof Dot
    */
    this.floor = floor;
  }

  /**
  * @memberof Dot
  */
  Dot.prototype.connect = function( dot, relation ){

    if( this.floor != dot.floor ) {
      info.error(this.uuid + " and " + dot.uuid + " is on different floor !");
      return false;
    }

    if(this.isConnected(dot.uuid, type)){
      this.connect[dot.uuid] = relation;
    }

    if(!dot.isConnected(this.uuid, type)){
      dot.connect[this.uuid] = relation;
    }

  }

  /**
  * @memberof Dot
  */
  Dot.prototype.isConnected = function( uuid, type ){

    if(this.connect[uuid] != null && this.connect[uuid] == type) return true;
    return false;

  }

  Dot.prototype.getCoor = function(){
    return this.point;
  }


  return Dot;
});
