function MiniTable(id, config) {
  config = config || {};
  var plotColor = ['#FF1493','#FF34B3','#EE6AA7','#FF69B4','#EE799F','#EEA9B8','#FFC0CB','#FFAEB9','#FFB6C1'];
  
  this.createTable = function () {
    var columns = "";
    if (config['columns']) {
      for (var i in config['columns']) {
        columns += "<th>"+config['columns'][i] + "</th>\n";
      }
    }

    var html = "<!-- data table -->                     \
    <table class=\"data-table\">                        \
      <tbody>                                           \
                                 \
      </tbody>                                          \
    </table>                                            \
    <!-- Hidden table used for cloning -->              \
    <table class=\"clone-table\" style=\"display: none;\"> \
      <tbody>                                           \
      <tr>                                              \
          <td>&nbsp;</td>                               \
                        \
      </tr>                                             \
      </tbody>                                          \
    </table>";
    $(id).hide().html(html);
  }

  this.update = function (data) {
    this.createTable();
    // create the table with the table data
    var tbody = $(id + ' .data-table').find("tbody");
    $(data).each(function (i, page) {
		page[0] = data[i][0].split(' (')[0];
		//console.log(data[i][0].split(' (')[0]);
        var row = $(id + ' .clone-table').find("tr:nth-child(1)").clone();
        row.find("td:nth-child(1)").html(page[0]);
        //row.find("td:nth-child(2)").html(page[1].toString().commaSeparate());
        row.appendTo(tbody);
		//console.log(page[0]);
    });

    $(id).show();
  }
}