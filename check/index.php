<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv ="Content-Type" content="text/html;charset=utf-8"/>

		<link type="text/css" rel="stylesheet" href="../css/style.css"/>
	</head>

	<body>
		<form action = "../final/" method = "post" id = "main">
			<h1>大學生活體驗營 選課系統</h1>
			<h4>姓名：徐鼎翔&nbsp;&nbsp;&nbsp;&nbsp;類組：二三類組</h4>
			<div id = "type"><div id = "2"></div></div>

			<div id = "form">
			<div>
			<table>
			<?php
				$temp = -1;
				$answer = [];
				foreach($_POST as $name=>$value) {
					$name_array = explode("_",$name);

					if($name_array[0] == $temp) {
						echo "<tr>";
							echo "<td>" . $value . "</td>";
							echo "<td id = \"" . $name . "\"></td>";
						echo "</tr>";
						echo "<tr><input type = \"hidden\" name = \"" . $name . "\"></input></tr>";

						continue;
					}

					echo "</table>";
					echo "</div>";
					echo "<div id = \"" . $name_array[0] . "\">";
						echo "<h3></h3>";

						echo "<table>";
							echo "<tr>";
								echo "<td>志願序</td>";
								echo "<td>課程名稱</td>";
							echo "</tr>";

							echo "<tr>";
								echo "<td>" . $value . "</td>";
								echo "<td id = \"" . $name . "\"></td>";
							echo "</tr>";
							echo "<tr><input type = \"hidden\" name = \"" . $name . "\"></input></tr>";
					$temp = $name_array[0];
				}
			?>
			</table>
			</div>
			<br><br>

			<input type = "submit" value = "送出"></input>
		</form>
	</body>

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</html>
