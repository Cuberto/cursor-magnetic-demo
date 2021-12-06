import $ from 'jquery';
import Cursor from "cursor";
import Magnetic from "magnetic";

// Init cursor
const cursor = new Cursor();

// Init magnetic
$('[data-magnetic]').each(function () {new Magnetic(this);});