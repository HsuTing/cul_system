<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv ="Content-Type" content="text/html;charset=utf-8"/>

		<link type="text/css" rel="stylesheet" href="css/set.css"/>
	</head>

	<body>
		<div>
			<h1>大學生活體驗營 選課系統</h1>
			<h3>姓名：徐鼎翔&nbsp;&nbsp;&nbsp;&nbsp;類組：二三類組</h3>
			<div id = "type"><div id = "2"></div></div>

			<?php
				$temp = -1;
				foreach($_POST as $name=>$value) {
					$name_array = explode("_",$name);

					if($name_array[0] == $temp) {
						echo "<tr>";
							echo "<td>" . $value . "</td>";
							echo "<td id = \"" . $name . "\"></td>";
						echo "</tr>";

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
					$temp = $name_array[0];
				}
			?>
			</table>
			</div>

			<a href = "../final/"><input type = "button" value = "送出"></input></a>
		</div>
	</body>

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</html>
