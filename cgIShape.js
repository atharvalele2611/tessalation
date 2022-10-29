//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube (subdivisions)  {
    if( subdivisions < 1 )
        subdivisions = 1;

    step = 1 /  subdivisions;

    for (i = 0; i < subdivisions; i++) {

         u0 = i * step - .5;

         u1 = (i + 1) * step - .5;

        for ( j = 0; j < subdivisions; j++) {

             v0 = j * step - .5;

             v1 = (j + 1) * step - .5;

            addTriangle(u0, v0, .5, u1, v0, .5, u0, v1, .5);

            addTriangle(u0, v1, .5, u1, v0, .5, u1, v1, .5);

            addTriangle(u1, v0, -.5, u0, v0, -.5, u0, v1, -.5);

            addTriangle(u1, v0, -.5, u0, v1, -.5, u1, v1, -.5);

            addTriangle(.5, u1, v0, .5, u0, v1, .5, u0, v0);

            addTriangle(.5, u1, v0, .5, u1, v1, .5, u0, v1);

            addTriangle(u1, -.5, v0, u0, -.5, v1, u0, -.5, v0);

            addTriangle(u1, -.5, v0, u1, -.5, v1, u0, -.5, v1);

            addTriangle(u0, .5, v1, u1, .5, v0, u0, .5, v0);

            addTriangle(u1, .5, v1, u1, .5, v0, u0, .5, v1);

            addTriangle(-.5, u0, v1, -.5, u1, v0, -.5, u0, v0);

            addTriangle(-.5, u1, v1, -.5, u1, v0, -.5, u0, v1);
        }
    }
}


//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder (radialdivision,heightdivision){
    // fill in your code here.
    if( heightdivision < 1 )
        heightdivision = 1;
    height_steps = 1 /  heightdivision;
    if( radialdivision < 3 )
        radialdivision = 3;
    angle = 0
    for (i = 0; i < radialdivision; i++){
    	u0 = 0.5 * Math.cos((angle * Math.PI) / 180.0)
    	v0 = 0.5 * Math.sin((angle * Math.PI) / 180.0)
    	angle = angle + 360 / radialdivision
    	u1 = 0.5 * Math.cos((angle * Math.PI) / 180.0)
    	v1 = 0.5 * Math.sin((angle * Math.PI) / 180.0)
    	addTriangle (0, 0.5, 0, u1, 0.5, v1, u0, 0.5, v0);
    	addTriangle (0, -0.5, 0, u1, -0.5, v1, u0, -0.5, v0);
    	
    	for( j = 0; j < heightdivision; j++){
    		h0 = j * height_steps - .5;
		 	h1 = (j + 1) * height_steps - .5;
    		addTriangle(u0, h0, v0, u1, h0, v1, u1, h1, v1);
			addTriangle(u1, h1, v1, u0, h1, v0, u0, h0, v0);
    	}
    }
}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialdivision, heightdivision) {
    // fill in your code here.
    if( heightdivision < 1 )
        heightdivision = 1;
//    t = 1 / heightdivision
    height_steps = 1 /  heightdivision;
    if( radialdivision < 3 )
        radialdivision = 3;
    angle = 0
    for (i = 0; i < radialdivision; i++){
    	u0 = 0.5 * Math.cos((angle * Math.PI) / 180.0)
    	v0 = 0.5 * Math.sin((angle * Math.PI) / 180.0)
    	angle = angle + 360 / radialdivision
    	u1 = 0.5 * Math.cos((angle * Math.PI) / 180.0)
    	v1 = 0.5 * Math.sin((angle * Math.PI) / 180.0)
    	
    	addTriangle (0, -0.5, 0, u1, -0.5, v1, u0, -0.5, v0);
    	//addTriangle (0, 0.5, 0, u1, -0.5, v1, u0, -0.5, v0);
    	
    	x0 = u0
    	z0 = v0
    	x1 = u1
    	z1 = v1
    	y0 = -0.5
		cx0 = x0 / heightdivision
		cz0 = z0 / heightdivision
		cx1 = x1 / heightdivision
		cz1 = z1 / heightdivision
		y1 = 1 / heightdivision
		for ( j = 0; j < heightdivision - 1; j++) {
			addTriangle(x0, y0, z0, x0 + cx0, y0 + y1, z0 + cz0, x1, y0, z1);
			addTriangle(x0 + cx0, y0 + y1, z0 + cz0, x1 + cx1, y0 + y1, z1 + cz1, x1, y0, z1);

			x0 += cx0
			z0 += cz0
			x1 += cx1
			z1 += cz1
			y0 += y1
		}
		addTriangle(x1, y0, z1, 0.0, 0.5, 0.0, x0, y0, z0)
    }
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    // fill in your code here.
	radius = 0.5
	a = radius;
	
	addTriangle(0, a, -1, -a, 1, 0, a, 1, 0);

	addTriangle(0, a, 1, a, 1, 0, -a, 1, 0 );

	addTriangle(0, a, 1, -1, 0, a, 0, -a, 1 );

	addTriangle(0, a, 1, 0, -a, 1, 1, 0, a );

	addTriangle(0, a, -1, 1, 0, -a, 0, -a, -1 );

	addTriangle(0, a, -1, 0, -a, -1, -1, 0, -a );

	addTriangle(0, -a, 1, -a, -1, 0, a, -1, 0 );

	addTriangle(0, -a, -1, a, -1, 0, -a, -1, 0 );

	addTriangle(-a, 1, 0, -1, 0, -a, -1, 0, a );

	addTriangle(-a, -1, 0, -1, 0, a, -1, 0, -a );

	addTriangle(a, 1, 0, 1, 0, a, 1, 0, -a );

	addTriangle(a, -1, 0, 1, 0, -a, 1, 0, a );

	addTriangle(0, a, 1, -a, 1, 0, -1, 0, a );

	addTriangle(0, a, 1, 1, 0, a, a, 1, 0 );

	addTriangle(0, a, -1, -1, 0, -a, -a, 1, 0 );

	addTriangle(0, a, -1, a, 1, 0, 1, 0, -a );

	addTriangle(0, -a, -1, -a, -1, 0, -1, 0, -a );

	addTriangle(0, -a, -1, 1, 0, -a, a, -1, 0 );

	addTriangle(0, -a, 1, -1, 0, a, -a, -1, 0 );

	addTriangle(0, -a, 1, a, -1, 0, 1, 0, a);
}

////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

