var peopleIndex = 0;
var peopleCapacity = peopleArray.length;

$( document ).ready(function() {
  for (var i = 0; i < peopleCapacity; i++)
  {
	  $( ".indicators" ).append("<span id=\"" + i + "\"></span>");
  }
update();

  $( "#prev" ).click(prev);
  $( "#next" ).click(next);
});

function prev()
{
	$( "#" + peopleIndex ).css( "background-color" , "gray" );

	if (peopleIndex > 0)
	{
		peopleIndex--;
	}
	else
	{
		peopleIndex = peopleCapacity - 1;
	}

	update();
}

function next()
{
	$( "#" + peopleIndex ).css( "background-color" , "gray" );

	if (peopleIndex < (peopleCapacity - 1))
	{
		peopleIndex++;
	}
	else
	{
		peopleIndex = 0;
	}

	update();
}

function update()
{
	$( "#name" ).html(peopleArray[peopleIndex].name);
	$( "#shout" ).html(peopleArray[peopleIndex].shoutout);
	$( "#count" ).html((peopleIndex+1) + "/" + peopleCapacity);

	$( "#" + peopleIndex ).css( "background-color" , "yellow" );
}
