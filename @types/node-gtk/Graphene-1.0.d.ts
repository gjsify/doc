/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Graphene-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Graphene {

/**
 * Specify the order of the rotations on each axis.
 * 
 * The %GRAPHENE_EULER_ORDER_DEFAULT value is special, and is used
 * as an alias for one of the other orders.
 */
enum EulerOrder {
    /**
     * Rotate in the default order; the
     *   default order is one of the following enumeration values
     */
    DEFAULT,
    /**
     * Rotate in the X, Y, and Z order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SXYZ
     */
    XYZ,
    /**
     * Rotate in the Y, Z, and X order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SYZX
     */
    YZX,
    /**
     * Rotate in the Z, X, and Y order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SZXY
     */
    ZXY,
    /**
     * Rotate in the X, Z, and Y order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SXZY
     */
    XZY,
    /**
     * Rotate in the Y, X, and Z order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SYXZ
     */
    YXZ,
    /**
     * Rotate in the Z, Y, and X order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SZYX
     */
    ZYX,
    /**
     * Defines a static rotation along the X, Y, and Z axes (Since: 1.10)
     */
    SXYZ,
    /**
     * Defines a static rotation along the X, Y, and X axes (Since: 1.10)
     */
    SXYX,
    /**
     * Defines a static rotation along the X, Z, and Y axes (Since: 1.10)
     */
    SXZY,
    /**
     * Defines a static rotation along the X, Z, and X axes (Since: 1.10)
     */
    SXZX,
    /**
     * Defines a static rotation along the Y, Z, and X axes (Since: 1.10)
     */
    SYZX,
    /**
     * Defines a static rotation along the Y, Z, and Y axes (Since: 1.10)
     */
    SYZY,
    /**
     * Defines a static rotation along the Y, X, and Z axes (Since: 1.10)
     */
    SYXZ,
    /**
     * Defines a static rotation along the Y, X, and Y axes (Since: 1.10)
     */
    SYXY,
    /**
     * Defines a static rotation along the Z, X, and Y axes (Since: 1.10)
     */
    SZXY,
    /**
     * Defines a static rotation along the Z, X, and Z axes (Since: 1.10)
     */
    SZXZ,
    /**
     * Defines a static rotation along the Z, Y, and X axes (Since: 1.10)
     */
    SZYX,
    /**
     * Defines a static rotation along the Z, Y, and Z axes (Since: 1.10)
     */
    SZYZ,
    /**
     * Defines a relative rotation along the Z, Y, and X axes (Since: 1.10)
     */
    RZYX,
    /**
     * Defines a relative rotation along the X, Y, and X axes (Since: 1.10)
     */
    RXYX,
    /**
     * Defines a relative rotation along the Y, Z, and X axes (Since: 1.10)
     */
    RYZX,
    /**
     * Defines a relative rotation along the X, Z, and X axes (Since: 1.10)
     */
    RXZX,
    /**
     * Defines a relative rotation along the X, Z, and Y axes (Since: 1.10)
     */
    RXZY,
    /**
     * Defines a relative rotation along the Y, Z, and Y axes (Since: 1.10)
     */
    RYZY,
    /**
     * Defines a relative rotation along the Z, X, and Y axes (Since: 1.10)
     */
    RZXY,
    /**
     * Defines a relative rotation along the Y, X, and Y axes (Since: 1.10)
     */
    RYXY,
    /**
     * Defines a relative rotation along the Y, X, and Z axes (Since: 1.10)
     */
    RYXZ,
    /**
     * Defines a relative rotation along the Z, X, and Z axes (Since: 1.10)
     */
    RZXZ,
    /**
     * Defines a relative rotation along the X, Y, and Z axes (Since: 1.10)
     */
    RXYZ,
    /**
     * Defines a relative rotation along the Z, Y, and Z axes (Since: 1.10)
     */
    RZYZ,
}
/**
 * The type of intersection.
 */
enum RayIntersectionKind {
    /**
     * No intersection
     */
    NONE,
    /**
     * The ray is entering the intersected
     *   object
     */
    ENTER,
    /**
     * The ray is leaving the intersected
     *   object
     */
    LEAVE,
}
const PI: number
const PI_2: number
/**
 * Evaluates to the number of components of a #graphene_vec2_t.
 * 
 * This symbol is useful when declaring a C array of floating
 * point values to be used with graphene_vec2_init_from_float() and
 * graphene_vec2_to_float(), e.g.
 * 
 * |[
 *   float v[GRAPHENE_VEC2_LEN];
 * 
 *   // vec is defined elsewhere
 *   graphene_vec2_to_float (&vec, v);
 * 
 *   for (int i = 0; i < GRAPHENE_VEC2_LEN; i++)
 *     fprintf (stdout, "component %d: %g\n", i, v[i]);
 * ```
 * 
 */
const VEC2_LEN: number
/**
 * Evaluates to the number of components of a #graphene_vec3_t.
 * 
 * This symbol is useful when declaring a C array of floating
 * point values to be used with graphene_vec3_init_from_float() and
 * graphene_vec3_to_float(), e.g.
 * 
 * |[
 *   float v[GRAPHENE_VEC3_LEN];
 * 
 *   // vec is defined elsewhere
 *   graphene_vec3_to_float (&vec, v);
 * 
 *   for (int i = 0; i < GRAPHENE_VEC2_LEN; i++)
 *     fprintf (stdout, "component %d: %g\n", i, v[i]);
 * ```
 * 
 */
const VEC3_LEN: number
/**
 * Evaluates to the number of components of a #graphene_vec4_t.
 * 
 * This symbol is useful when declaring a C array of floating
 * point values to be used with graphene_vec4_init_from_float() and
 * graphene_vec4_to_float(), e.g.
 * 
 * |[
 *   float v[GRAPHENE_VEC4_LEN];
 * 
 *   // vec is defined elsewhere
 *   graphene_vec4_to_float (&vec, v);
 * 
 *   for (int i = 0; i < GRAPHENE_VEC4_LEN; i++)
 *     fprintf (stdout, "component %d: %g\n", i, v[i]);
 * ```
 * 
 */
const VEC4_LEN: number
function boxEmpty(): Box
function boxInfinite(): Box
function boxMinusOne(): Box
function boxOne(): Box
function boxOneMinusOne(): Box
function boxZero(): Box
function point3dZero(): Point3D
function pointZero(): Point
function rectAlloc(): Rect
function rectZero(): Rect
function sizeZero(): Size
function vec2One(): Vec2
function vec2XAxis(): Vec2
function vec2YAxis(): Vec2
function vec2Zero(): Vec2
function vec3One(): Vec3
function vec3XAxis(): Vec3
function vec3YAxis(): Vec3
function vec3ZAxis(): Vec3
function vec3Zero(): Vec3
function vec4One(): Vec4
function vec4WAxis(): Vec4
function vec4XAxis(): Vec4
function vec4YAxis(): Vec4
function vec4ZAxis(): Vec4
function vec4Zero(): Vec4
class Box {
    /* Methods of Graphene-1.0.Graphene.Box */
    /**
     * Checks whether the #graphene_box_t `a` contains the given
     * #graphene_box_t `b`.
     */
    containsBox(b: Box): boolean
    /**
     * Checks whether `box` contains the given `point`.
     */
    containsPoint(point: Point3D): boolean
    /**
     * Checks whether the two given boxes are equal.
     */
    equal(b: Box): boolean
    /**
     * Expands the dimensions of `box` to include the coordinates at `point`.
     */
    expand(point: Point3D): /* res */ Box
    /**
     * Expands the dimensions of `box` by the given `scalar` value.
     * 
     * If `scalar` is positive, the #graphene_box_t will grow; if `scalar` is
     * negative, the #graphene_box_t will shrink.
     */
    expandScalar(scalar: number): /* res */ Box
    /**
     * Expands the dimensions of `box` to include the coordinates of the
     * given vector.
     */
    expandVec3(vec: Vec3): /* res */ Box
    /**
     * Frees the resources allocated by graphene_box_alloc().
     */
    free(): void
    /**
     * Computes the bounding #graphene_sphere_t capable of containing the given
     * #graphene_box_t.
     */
    getBoundingSphere(): /* sphere */ Sphere
    /**
     * Retrieves the coordinates of the center of a #graphene_box_t.
     */
    getCenter(): /* center */ Point3D
    /**
     * Retrieves the size of the `box` on the Z axis.
     */
    getDepth(): number
    /**
     * Retrieves the size of the `box` on the Y axis.
     */
    getHeight(): number
    /**
     * Retrieves the coordinates of the maximum point of the given
     * #graphene_box_t.
     */
    getMax(): /* max */ Point3D
    /**
     * Retrieves the coordinates of the minimum point of the given
     * #graphene_box_t.
     */
    getMin(): /* min */ Point3D
    /**
     * Retrieves the size of the box on all three axes, and stores
     * it into the given `size` vector.
     */
    getSize(): /* size */ Vec3
    /**
     * Computes the vertices of the given #graphene_box_t.
     */
    getVertices(): /* vertices */ Vec3[]
    /**
     * Retrieves the size of the `box` on the X axis.
     */
    getWidth(): number
    /**
     * Initializes the given #graphene_box_t with two vertices.
     */
    init(min?: Point3D | null, max?: Point3D | null): Box
    /**
     * Initializes the given #graphene_box_t with the vertices of
     * another #graphene_box_t.
     */
    initFromBox(src: Box): Box
    /**
     * Initializes the given #graphene_box_t with the given array
     * of vertices.
     * 
     * If `n_points` is 0, the returned box is initialized with
     * graphene_box_empty().
     */
    initFromPoints(points: Point3D[]): Box
    /**
     * Initializes the given #graphene_box_t with two vertices
     * stored inside #graphene_vec3_t.
     */
    initFromVec3(min?: Vec3 | null, max?: Vec3 | null): Box
    /**
     * Initializes the given #graphene_box_t with the given array
     * of vertices.
     * 
     * If `n_vectors` is 0, the returned box is initialized with
     * graphene_box_empty().
     */
    initFromVectors(vectors: Vec3[]): Box
    /**
     * Intersects the two given #graphene_box_t.
     * 
     * If the two boxes do not intersect, `res` will contain a degenerate box
     * initialized with graphene_box_empty().
     */
    intersection(b: Box): [ /* returnType */ boolean, /* res */ Box | null ]
    /**
     * Unions the two given #graphene_box_t.
     */
    union(b: Box): /* res */ Box
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Box
    /**
     * A degenerate #graphene_box_t that can only be expanded.
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static empty(): Box
    /**
     * A degenerate #graphene_box_t that cannot be expanded.
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static infinite(): Box
    /**
     * A #graphene_box_t with the minimum vertex set at (-1, -1, -1) and the
     * maximum vertex set at (0, 0, 0).
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static minusOne(): Box
    /**
     * A #graphene_box_t with the minimum vertex set at (0, 0, 0) and the
     * maximum vertex set at (1, 1, 1).
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static one(): Box
    /**
     * A #graphene_box_t with the minimum vertex set at (-1, -1, -1) and the
     * maximum vertex set at (1, 1, 1).
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static oneMinusOne(): Box
    /**
     * A #graphene_box_t with both the minimum and maximum vertices set at (0, 0, 0).
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static zero(): Box
}
class Euler {
    /* Methods of Graphene-1.0.Graphene.Euler */
    /**
     * Checks if two #graphene_euler_t are equal.
     */
    equal(b: Euler): boolean
    /**
     * Frees the resources allocated by graphene_euler_alloc().
     */
    free(): void
    /**
     * Retrieves the first component of the Euler angle vector,
     * depending on the order of rotation.
     * 
     * See also: graphene_euler_get_x()
     */
    getAlpha(): number
    /**
     * Retrieves the second component of the Euler angle vector,
     * depending on the order of rotation.
     * 
     * See also: graphene_euler_get_y()
     */
    getBeta(): number
    /**
     * Retrieves the third component of the Euler angle vector,
     * depending on the order of rotation.
     * 
     * See also: graphene_euler_get_z()
     */
    getGamma(): number
    /**
     * Retrieves the order used to apply the rotations described in the
     * #graphene_euler_t structure, when converting to and from other
     * structures, like #graphene_quaternion_t and #graphene_matrix_t.
     * 
     * This function does not return the %GRAPHENE_EULER_ORDER_DEFAULT
     * enumeration value; it will return the effective order of rotation
     * instead.
     */
    getOrder(): EulerOrder
    /**
     * Retrieves the rotation angle on the X axis, in degrees.
     */
    getX(): number
    /**
     * Retrieves the rotation angle on the Y axis, in degrees.
     */
    getY(): number
    /**
     * Retrieves the rotation angle on the Z axis, in degrees.
     */
    getZ(): number
    /**
     * Initializes a #graphene_euler_t using the given angles.
     * 
     * The order of the rotations is %GRAPHENE_EULER_ORDER_DEFAULT.
     */
    init(x: number, y: number, z: number): Euler
    /**
     * Initializes a #graphene_euler_t using the angles and order of
     * another #graphene_euler_t.
     * 
     * If the #graphene_euler_t `src` is %NULL, this function is equivalent
     * to calling graphene_euler_init() with all angles set to 0.
     */
    initFromEuler(src?: Euler | null): Euler
    /**
     * Initializes a #graphene_euler_t using the given rotation matrix.
     * 
     * If the #graphene_matrix_t `m` is %NULL, the #graphene_euler_t will
     * be initialized with all angles set to 0.
     */
    initFromMatrix(m: Matrix | null, order: EulerOrder): Euler
    /**
     * Initializes a #graphene_euler_t using the given normalized quaternion.
     * 
     * If the #graphene_quaternion_t `q` is %NULL, the #graphene_euler_t will
     * be initialized with all angles set to 0.
     */
    initFromQuaternion(q: Quaternion | null, order: EulerOrder): Euler
    /**
     * Initializes a #graphene_euler_t using the given angles
     * and order of rotation.
     */
    initFromRadians(x: number, y: number, z: number, order: EulerOrder): Euler
    /**
     * Initializes a #graphene_euler_t using the angles contained in a
     * #graphene_vec3_t.
     * 
     * If the #graphene_vec3_t `v` is %NULL, the #graphene_euler_t will be
     * initialized with all angles set to 0.
     */
    initFromVec3(v: Vec3 | null, order: EulerOrder): Euler
    /**
     * Initializes a #graphene_euler_t with the given angles and `order`.
     */
    initWithOrder(x: number, y: number, z: number, order: EulerOrder): Euler
    /**
     * Reorders a #graphene_euler_t using `order`.
     * 
     * This function is equivalent to creating a #graphene_quaternion_t from the
     * given #graphene_euler_t, and then converting the quaternion into another
     * #graphene_euler_t.
     */
    reorder(order: EulerOrder): /* res */ Euler
    /**
     * Converts a #graphene_euler_t into a transformation matrix expressing
     * the extrinsic composition of rotations described by the Euler angles.
     * 
     * The rotations are applied over the reference frame axes in the order
     * associated with the #graphene_euler_t; for instance, if the order
     * used to initialize `e` is %GRAPHENE_EULER_ORDER_XYZ:
     * 
     *  * the first rotation moves the body around the X axis with
     *    an angle φ
     *  * the second rotation moves the body around the Y axis with
     *    an angle of ϑ
     *  * the third rotation moves the body around the Z axis with
     *    an angle of ψ
     * 
     * The rotation sign convention is right-handed, to preserve compatibility
     * between Euler-based, quaternion-based, and angle-axis-based rotations.
     */
    toMatrix(): /* res */ Matrix
    /**
     * Converts a #graphene_euler_t into a #graphene_quaternion_t.
     */
    toQuaternion(): /* res */ Quaternion
    /**
     * Retrieves the angles of a #graphene_euler_t and initializes a
     * #graphene_vec3_t with them.
     */
    toVec3(): /* res */ Vec3
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Euler
}
class Frustum {
    /* Methods of Graphene-1.0.Graphene.Frustum */
    /**
     * Checks whether a point is inside the volume defined by the given
     * #graphene_frustum_t.
     */
    containsPoint(point: Point3D): boolean
    /**
     * Checks whether the two given #graphene_frustum_t are equal.
     */
    equal(b: Frustum): boolean
    /**
     * Frees the resources allocated by graphene_frustum_alloc().
     */
    free(): void
    /**
     * Retrieves the planes that define the given #graphene_frustum_t.
     */
    getPlanes(): /* planes */ Plane[]
    /**
     * Initializes the given #graphene_frustum_t using the provided
     * clipping planes.
     */
    init(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): Frustum
    /**
     * Initializes the given #graphene_frustum_t using the clipping
     * planes of another #graphene_frustum_t.
     */
    initFromFrustum(src: Frustum): Frustum
    /**
     * Initializes a #graphene_frustum_t using the given `matrix`.
     */
    initFromMatrix(matrix: Matrix): Frustum
    /**
     * Checks whether the given `box` intersects a plane of
     * a #graphene_frustum_t.
     */
    intersectsBox(box: Box): boolean
    /**
     * Checks whether the given `sphere` intersects a plane of
     * a #graphene_frustum_t.
     */
    intersectsSphere(sphere: Sphere): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Frustum
}
class Matrix {
    /* Methods of Graphene-1.0.Graphene.Matrix */
    /**
     * Decomposes a transformation matrix into its component transformations.
     * 
     * The algorithm for decomposing a matrix is taken from the
     * [CSS3 Transforms specification](http://dev.w3.org/csswg/css-transforms/);
     * specifically, the decomposition code is based on the equivalent code
     * published in "Graphics Gems II", edited by Jim Arvo, and
     * [available online](http://web.archive.org/web/20150512160205/http://tog.acm.org/resources/GraphicsGems/gemsii/unmatrix.c).
     */
    decompose(): [ /* returnType */ boolean, /* translate */ Vec3, /* scale */ Vec3, /* rotate */ Quaternion, /* shear */ Vec3, /* perspective */ Vec4 ]
    /**
     * Computes the determinant of the given matrix.
     */
    determinant(): number
    /**
     * Checks whether the two given #graphene_matrix_t matrices are equal.
     */
    equal(b: Matrix): boolean
    /**
     * Checks whether the two given #graphene_matrix_t matrices are
     * byte-by-byte equal.
     * 
     * While this function is faster than graphene_matrix_equal(), it
     * can also return false negatives, so it should be used in
     * conjuction with either graphene_matrix_equal() or
     * graphene_matrix_near(). For instance:
     * 
     * 
     * ```c
     *   if (graphene_matrix_equal_fast (a, b))
     *     {
     *       // matrices are definitely the same
     *     }
     *   else
     *     {
     *       if (graphene_matrix_equal (a, b))
     *         // matrices contain the same values within an epsilon of FLT_EPSILON
     *       else if (graphene_matrix_near (a, b, 0.0001))
     *         // matrices contain the same values within an epsilon of 0.0001
     *       else
     *         // matrices are not equal
     *     }
     * ```
     * 
     */
    equalFast(b: Matrix): boolean
    /**
     * Frees the resources allocated by graphene_matrix_alloc().
     */
    free(): void
    /**
     * Retrieves the given row vector at `index_` inside a matrix.
     */
    getRow(index: number): /* res */ Vec4
    /**
     * Retrieves the value at the given `row` and `col` index.
     */
    getValue(row: number, col: number): number
    /**
     * Retrieves the scaling factor on the X axis in `m`.
     */
    getXScale(): number
    /**
     * Retrieves the translation component on the X axis from `m`.
     */
    getXTranslation(): number
    /**
     * Retrieves the scaling factor on the Y axis in `m`.
     */
    getYScale(): number
    /**
     * Retrieves the translation component on the Y axis from `m`.
     */
    getYTranslation(): number
    /**
     * Retrieves the scaling factor on the Z axis in `m`.
     */
    getZScale(): number
    /**
     * Retrieves the translation component on the Z axis from `m`.
     */
    getZTranslation(): number
    /**
     * Initializes a #graphene_matrix_t from the values of an affine
     * transformation matrix.
     * 
     * The arguments map to the following matrix layout:
     * 
     * |[<!-- language="plain" -->
     *   ⎛ xx  yx ⎞   ⎛  a   b  0 ⎞
     *   ⎜ xy  yy ⎟ = ⎜  c   d  0 ⎟
     *   ⎝ x0  y0 ⎠   ⎝ tx  ty  1 ⎠
     * ```
     * 
     * 
     * This function can be used to convert between an affine matrix type
     * from other libraries and a #graphene_matrix_t.
     */
    initFrom2d(xx: number, yx: number, xy: number, yy: number, x0: number, y0: number): Matrix
    /**
     * Initializes a #graphene_matrix_t with the given array of floating
     * point values.
     */
    initFromFloat(v: number[]): Matrix
    /**
     * Initializes a #graphene_matrix_t using the values of the
     * given matrix.
     */
    initFromMatrix(src: Matrix): Matrix
    /**
     * Initializes a #graphene_matrix_t with the given four row
     * vectors.
     */
    initFromVec4(v0: Vec4, v1: Vec4, v2: Vec4, v3: Vec4): Matrix
    /**
     * Initializes a #graphene_matrix_t compatible with #graphene_frustum_t.
     * 
     * See also: graphene_frustum_init_from_matrix()
     */
    initFrustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): Matrix
    /**
     * Initializes a #graphene_matrix_t with the identity matrix.
     */
    initIdentity(): Matrix
    /**
     * Initializes a #graphene_matrix_t so that it positions the "camera"
     * at the given `eye` coordinates towards an object at the `center`
     * coordinates. The top of the camera is aligned to the direction
     * of the `up` vector.
     * 
     * Before the transform, the camera is assumed to be placed at the
     * origin, looking towards the negative Z axis, with the top side of
     * the camera facing in the direction of the Y axis and the right
     * side in the direction of the X axis.
     * 
     * In theory, one could use `m` to transform a model of such a camera
     * into world-space. However, it is more common to use the inverse of
     * `m` to transform another object from world coordinates to the view
     * coordinates of the camera. Typically you would then apply the
     * camera projection transform to get from view to screen
     * coordinates.
     */
    initLookAt(eye: Vec3, center: Vec3, up: Vec3): Matrix
    /**
     * Initializes a #graphene_matrix_t with an orthographic projection.
     */
    initOrtho(left: number, right: number, top: number, bottom: number, zNear: number, zFar: number): Matrix
    /**
     * Initializes a #graphene_matrix_t with a perspective projection.
     */
    initPerspective(fovy: number, aspect: number, zNear: number, zFar: number): Matrix
    /**
     * Initializes `m` to represent a rotation of `angle` degrees on
     * the axis represented by the `axis` vector.
     */
    initRotate(angle: number, axis: Vec3): Matrix
    /**
     * Initializes a #graphene_matrix_t with the given scaling factors.
     */
    initScale(x: number, y: number, z: number): Matrix
    /**
     * Initializes a #graphene_matrix_t with a skew transformation
     * with the given factors.
     */
    initSkew(xSkew: number, ySkew: number): Matrix
    /**
     * Initializes a #graphene_matrix_t with a translation to the
     * given coordinates.
     */
    initTranslate(p: Point3D): Matrix
    /**
     * Linearly interpolates the two given #graphene_matrix_t by
     * interpolating the decomposed transformations separately.
     * 
     * If either matrix cannot be reduced to their transformations
     * then the interpolation cannot be performed, and this function
     * will return an identity matrix.
     */
    interpolate(b: Matrix, factor: number): /* res */ Matrix
    /**
     * Inverts the given matrix.
     */
    inverse(): [ /* returnType */ boolean, /* res */ Matrix ]
    /**
     * Checks whether the given #graphene_matrix_t is compatible with an
     * a 2D affine transformation matrix.
     */
    is2d(): boolean
    /**
     * Checks whether a #graphene_matrix_t has a visible back face.
     */
    isBackfaceVisible(): boolean
    /**
     * Checks whether the given #graphene_matrix_t is the identity matrix.
     */
    isIdentity(): boolean
    /**
     * Checks whether a matrix is singular.
     */
    isSingular(): boolean
    /**
     * Multiplies two #graphene_matrix_t.
     * 
     * Matrix multiplication is not commutative in general; the order of the factors matters.
     * The product of this multiplication is (`a` × `b)`
     */
    multiply(b: Matrix): /* res */ Matrix
    /**
     * Compares the two given #graphene_matrix_t matrices and checks
     * whether their values are within the given `epsilon` of each
     * other.
     */
    near(b: Matrix, epsilon: number): boolean
    /**
     * Normalizes the given #graphene_matrix_t.
     */
    normalize(): /* res */ Matrix
    /**
     * Applies a perspective of `depth` to the matrix.
     */
    perspective(depth: number): /* res */ Matrix
    /**
     * Prints the contents of a matrix to the standard error stream.
     * 
     * This function is only useful for debugging; there are no guarantees
     * made on the format of the output.
     */
    print(): void
    /**
     * Projects a #graphene_point_t using the matrix `m`.
     */
    projectPoint(p: Point): /* res */ Point
    /**
     * Projects all corners of a #graphene_rect_t using the given matrix.
     * 
     * See also: graphene_matrix_project_point()
     */
    projectRect(r: Rect): /* res */ Quad
    /**
     * Projects a #graphene_rect_t using the given matrix.
     * 
     * The resulting rectangle is the axis aligned bounding rectangle capable
     * of fully containing the projected rectangle.
     */
    projectRectBounds(r: Rect): /* res */ Rect
    /**
     * Adds a rotation transformation to `m,` using the given `angle`
     * and `axis` vector.
     * 
     * This is the equivalent of calling graphene_matrix_init_rotate() and
     * then multiplying the matrix `m` with the rotation matrix.
     */
    rotate(angle: number, axis: Vec3): void
    /**
     * Adds a rotation transformation to `m,` using the given
     * #graphene_euler_t.
     */
    rotateEuler(e: Euler): void
    /**
     * Adds a rotation transformation to `m,` using the given
     * #graphene_quaternion_t.
     * 
     * This is the equivalent of calling graphene_quaternion_to_matrix() and
     * then multiplying `m` with the rotation matrix.
     */
    rotateQuaternion(q: Quaternion): void
    /**
     * Adds a rotation transformation around the X axis to `m,` using
     * the given `angle`.
     * 
     * See also: graphene_matrix_rotate()
     */
    rotateX(angle: number): void
    /**
     * Adds a rotation transformation around the Y axis to `m,` using
     * the given `angle`.
     * 
     * See also: graphene_matrix_rotate()
     */
    rotateY(angle: number): void
    /**
     * Adds a rotation transformation around the Z axis to `m,` using
     * the given `angle`.
     * 
     * See also: graphene_matrix_rotate()
     */
    rotateZ(angle: number): void
    /**
     * Adds a scaling transformation to `m,` using the three
     * given factors.
     * 
     * This is the equivalent of calling graphene_matrix_init_scale() and then
     * multiplying the matrix `m` with the scale matrix.
     */
    scale(factorX: number, factorY: number, factorZ: number): void
    /**
     * Adds a skew of `factor` on the X and Y axis to the given matrix.
     */
    skewXy(factor: number): void
    /**
     * Adds a skew of `factor` on the X and Z axis to the given matrix.
     */
    skewXz(factor: number): void
    /**
     * Adds a skew of `factor` on the Y and Z axis to the given matrix.
     */
    skewYz(factor: number): void
    /**
     * Converts a #graphene_matrix_t to an affine transformation
     * matrix, if the given matrix is compatible.
     * 
     * The returned values have the following layout:
     * 
     * |[<!-- language="plain" -->
     *   ⎛ xx  yx ⎞   ⎛  a   b  0 ⎞
     *   ⎜ xy  yy ⎟ = ⎜  c   d  0 ⎟
     *   ⎝ x0  y0 ⎠   ⎝ tx  ty  1 ⎠
     * ```
     * 
     * 
     * This function can be used to convert between a #graphene_matrix_t
     * and an affine matrix type from other libraries.
     */
    to2d(): [ /* returnType */ boolean, /* xx */ number, /* yx */ number, /* xy */ number, /* yy */ number, /* x0 */ number, /* y0 */ number ]
    /**
     * Converts a #graphene_matrix_t to an array of floating point
     * values.
     */
    toFloat(): /* v */ number[]
    /**
     * Transforms each corner of a #graphene_rect_t using the given matrix `m`.
     * 
     * The result is the axis aligned bounding rectangle containing the coplanar
     * quadrilateral.
     * 
     * See also: graphene_matrix_transform_point()
     */
    transformBounds(r: Rect): /* res */ Rect
    /**
     * Transforms the vertices of a #graphene_box_t using the given matrix `m`.
     * 
     * The result is the axis aligned bounding box containing the transformed
     * vertices.
     */
    transformBox(b: Box): /* res */ Box
    /**
     * Transforms the given #graphene_point_t using the matrix `m`.
     * 
     * Unlike graphene_matrix_transform_vec3(), this function will take into
     * account the fourth row vector of the #graphene_matrix_t when computing
     * the dot product of each row vector of the matrix.
     * 
     * See also: graphene_simd4x4f_point3_mul()
     */
    transformPoint(p: Point): /* res */ Point
    /**
     * Transforms the given #graphene_point3d_t using the matrix `m`.
     * 
     * Unlike graphene_matrix_transform_vec3(), this function will take into
     * account the fourth row vector of the #graphene_matrix_t when computing
     * the dot product of each row vector of the matrix.
     * 
     * See also: graphene_simd4x4f_point3_mul()
     */
    transformPoint3d(p: Point3D): /* res */ Point3D
    /**
     * Transform a #graphene_ray_t using the given matrix `m`.
     */
    transformRay(r: Ray): /* res */ Ray
    /**
     * Transforms each corner of a #graphene_rect_t using the given matrix `m`.
     * 
     * The result is a coplanar quadrilateral.
     * 
     * See also: graphene_matrix_transform_point()
     */
    transformRect(r: Rect): /* res */ Quad
    /**
     * Transforms a #graphene_sphere_t using the given matrix `m`. The
     * result is the bounding sphere containing the transformed sphere.
     */
    transformSphere(s: Sphere): /* res */ Sphere
    /**
     * Transforms the given #graphene_vec3_t using the matrix `m`.
     * 
     * This function will multiply the X, Y, and Z row vectors of the matrix `m`
     * with the corresponding components of the vector `v`. The W row vector will
     * be ignored.
     * 
     * See also: graphene_simd4x4f_vec3_mul()
     */
    transformVec3(v: Vec3): /* res */ Vec3
    /**
     * Transforms the given #graphene_vec4_t using the matrix `m`.
     * 
     * See also: graphene_simd4x4f_vec4_mul()
     */
    transformVec4(v: Vec4): /* res */ Vec4
    /**
     * Adds a translation transformation to `m` using the coordinates
     * of the given #graphene_point3d_t.
     * 
     * This is the equivalent of calling graphene_matrix_init_translate() and
     * then multiplying `m` with the translation matrix.
     */
    translate(pos: Point3D): void
    /**
     * Transposes the given matrix.
     */
    transpose(): /* res */ Matrix
    /**
     * Unprojects the given `point` using the `projection` matrix and
     * a `modelview` matrix.
     */
    unprojectPoint3d(modelview: Matrix, point: Point3D): /* res */ Point3D
    /**
     * Undoes the transformation on the corners of a #graphene_rect_t using the
     * given matrix, within the given axis aligned rectangular `bounds`.
     */
    untransformBounds(r: Rect, bounds: Rect): /* res */ Rect
    /**
     * Undoes the transformation of a #graphene_point_t using the
     * given matrix, within the given axis aligned rectangular `bounds`.
     */
    untransformPoint(p: Point, bounds: Rect): [ /* returnType */ boolean, /* res */ Point ]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Matrix
}
class Plane {
    /* Methods of Graphene-1.0.Graphene.Plane */
    /**
     * Computes the distance of `point` from a #graphene_plane_t.
     */
    distance(point: Point3D): number
    /**
     * Checks whether the two given #graphene_plane_t are equal.
     */
    equal(b: Plane): boolean
    /**
     * Frees the resources allocated by graphene_plane_alloc().
     */
    free(): void
    /**
     * Retrieves the distance along the normal vector of the
     * given #graphene_plane_t from the origin.
     */
    getConstant(): number
    /**
     * Retrieves the normal vector pointing towards the origin of the
     * given #graphene_plane_t.
     */
    getNormal(): /* normal */ Vec3
    /**
     * Initializes the given #graphene_plane_t using the given `normal` vector
     * and `constant` values.
     */
    init(normal: Vec3 | null, constant: number): Plane
    /**
     * Initializes the given #graphene_plane_t using the normal
     * vector and constant of another #graphene_plane_t.
     */
    initFromPlane(src: Plane): Plane
    /**
     * Initializes the given #graphene_plane_t using the given normal vector
     * and an arbitrary co-planar point.
     */
    initFromPoint(normal: Vec3, point: Point3D): Plane
    /**
     * Initializes the given #graphene_plane_t using the 3 provided co-planar
     * points.
     * 
     * The winding order is counter-clockwise, and determines which direction
     * the normal vector will point.
     */
    initFromPoints(a: Point3D, b: Point3D, c: Point3D): Plane
    /**
     * Initializes the given #graphene_plane_t using the components of
     * the given #graphene_vec4_t vector.
     */
    initFromVec4(src: Vec4): Plane
    /**
     * Negates the normal vector and constant of a #graphene_plane_t, effectively
     * mirroring the plane across the origin.
     */
    negate(): /* res */ Plane
    /**
     * Normalizes the vector of the given #graphene_plane_t,
     * and adjusts the constant accordingly.
     */
    normalize(): /* res */ Plane
    /**
     * Transforms a #graphene_plane_t `p` using the given `matrix`
     * and `normal_matrix`.
     * 
     * If `normal_matrix` is %NULL, a transformation matrix for the plane
     * normal will be computed from `matrix`. If you are transforming
     * multiple planes using the same `matrix` it's recommended to compute
     * the normal matrix beforehand to avoid incurring in the cost of
     * recomputing it every time.
     */
    transform(matrix: Matrix, normalMatrix?: Matrix | null): /* res */ Plane
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Plane
}
class Point {
    /* Fields of Graphene-1.0.Graphene.Point */
    /**
     * the X coordinate of the point
     */
    readonly x: number
    /**
     * the Y coordinate of the point
     */
    readonly y: number
    /* Methods of Graphene-1.0.Graphene.Point */
    /**
     * Computes the distance between `a` and `b`.
     */
    distance(b: Point): [ /* returnType */ number, /* dX */ number | null, /* dY */ number | null ]
    /**
     * Checks if the two points `a` and `b` point to the same
     * coordinates.
     * 
     * This function accounts for floating point fluctuations; if
     * you want to control the fuzziness of the match, you can use
     * graphene_point_near() instead.
     */
    equal(b: Point): boolean
    /**
     * Frees the resources allocated by graphene_point_alloc().
     */
    free(): void
    /**
     * Initializes `p` to the given `x` and `y` coordinates.
     * 
     * It's safe to call this function multiple times.
     */
    init(x: number, y: number): Point
    /**
     * Initializes `p` with the same coordinates of `src`.
     */
    initFromPoint(src: Point): Point
    /**
     * Initializes `p` with the coordinates inside the given #graphene_vec2_t.
     */
    initFromVec2(src: Vec2): Point
    /**
     * Linearly interpolates the coordinates of `a` and `b` using the
     * given `factor`.
     */
    interpolate(b: Point, factor: number): /* res */ Point
    /**
     * Checks whether the two points `a` and `b` are within
     * the threshold of `epsilon`.
     */
    near(b: Point, epsilon: number): boolean
    /**
     * Stores the coordinates of the given #graphene_point_t into a
     * #graphene_vec2_t.
     */
    toVec2(): /* v */ Vec2
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Point
    /**
     * Returns a point fixed at (0, 0).
     */
    static zero(): Point
}
class Point3D {
    /* Fields of Graphene-1.0.Graphene.Point3D */
    /**
     * the X coordinate
     */
    readonly x: number
    /**
     * the Y coordinate
     */
    readonly y: number
    /**
     * the Z coordinate
     */
    readonly z: number
    /* Methods of Graphene-1.0.Graphene.Point3D */
    /**
     * Computes the cross product of the two given #graphene_point3d_t.
     */
    cross(b: Point3D): /* res */ Point3D
    /**
     * Computes the distance between the two given #graphene_point3d_t.
     */
    distance(b: Point3D): [ /* returnType */ number, /* delta */ Vec3 | null ]
    /**
     * Computes the dot product of the two given #graphene_point3d_t.
     */
    dot(b: Point3D): number
    /**
     * Checks whether two given points are equal.
     */
    equal(b: Point3D): boolean
    /**
     * Frees the resources allocated via graphene_point3d_alloc().
     */
    free(): void
    /**
     * Initializes a #graphene_point3d_t with the given coordinates.
     */
    init(x: number, y: number, z: number): Point3D
    /**
     * Initializes a #graphene_point3d_t using the coordinates of
     * another #graphene_point3d_t.
     */
    initFromPoint(src: Point3D): Point3D
    /**
     * Initializes a #graphene_point3d_t using the components
     * of a #graphene_vec3_t.
     */
    initFromVec3(v: Vec3): Point3D
    /**
     * Linearly interpolates each component of `a` and `b` using the
     * provided `factor,` and places the result in `res`.
     */
    interpolate(b: Point3D, factor: number): /* res */ Point3D
    /**
     * Computes the length of the vector represented by the
     * coordinates of the given #graphene_point3d_t.
     */
    length(): number
    /**
     * Checks whether the two points are near each other, within
     * an `epsilon` factor.
     */
    near(b: Point3D, epsilon: number): boolean
    /**
     * Computes the normalization of the vector represented by the
     * coordinates of the given #graphene_point3d_t.
     */
    normalize(): /* res */ Point3D
    /**
     * Normalizes the coordinates of a #graphene_point3d_t using the
     * given viewport and clipping planes.
     * 
     * The coordinates of the resulting #graphene_point3d_t will be
     * in the [ -1, 1 ] range.
     */
    normalizeViewport(viewport: Rect, zNear: number, zFar: number): /* res */ Point3D
    /**
     * Scales the coordinates of the given #graphene_point3d_t by
     * the given `factor`.
     */
    scale(factor: number): /* res */ Point3D
    /**
     * Stores the coordinates of a #graphene_point3d_t into a
     * #graphene_vec3_t.
     */
    toVec3(): /* v */ Vec3
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Point3D
    /**
     * Retrieves a constant point with all three coordinates set to 0.
     */
    static zero(): Point3D
}
class Quad {
    /* Methods of Graphene-1.0.Graphene.Quad */
    /**
     * Computes the bounding rectangle of `q` and places it into `r`.
     */
    bounds(): /* r */ Rect
    /**
     * Checks if the given #graphene_quad_t contains the given #graphene_point_t.
     */
    contains(p: Point): boolean
    /**
     * Frees the resources allocated by graphene_quad_alloc()
     */
    free(): void
    /**
     * Retrieves the point of a #graphene_quad_t at the given index.
     */
    getPoint(index: number): Point
    /**
     * Initializes a #graphene_quad_t with the given points.
     */
    init(p1: Point, p2: Point, p3: Point, p4: Point): Quad
    /**
     * Initializes a #graphene_quad_t using an array of points.
     */
    initFromPoints(points: Point[]): Quad
    /**
     * Initializes a #graphene_quad_t using the four corners of the
     * given #graphene_rect_t.
     */
    initFromRect(r: Rect): Quad
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Quad
}
class Quaternion {
    /* Methods of Graphene-1.0.Graphene.Quaternion */
    /**
     * Adds two #graphene_quaternion_t `a` and `b`.
     */
    add(b: Quaternion): /* res */ Quaternion
    /**
     * Computes the dot product of two #graphene_quaternion_t.
     */
    dot(b: Quaternion): number
    /**
     * Checks whether the given quaternions are equal.
     */
    equal(b: Quaternion): boolean
    /**
     * Releases the resources allocated by graphene_quaternion_alloc().
     */
    free(): void
    /**
     * Initializes a #graphene_quaternion_t using the given four values.
     */
    init(x: number, y: number, z: number, w: number): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using an `angle` on a
     * specific `axis`.
     */
    initFromAngleVec3(angle: number, axis: Vec3): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using the values of
     * the [Euler angles](http://en.wikipedia.org/wiki/Euler_angles)
     * on each axis.
     * 
     * See also: graphene_quaternion_init_from_euler()
     */
    initFromAngles(degX: number, degY: number, degZ: number): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using the given #graphene_euler_t.
     */
    initFromEuler(e: Euler): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using the rotation components
     * of a transformation matrix.
     */
    initFromMatrix(m: Matrix): Quaternion
    /**
     * Initializes a #graphene_quaternion_t with the values from `src`.
     */
    initFromQuaternion(src: Quaternion): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using the values of
     * the [Euler angles](http://en.wikipedia.org/wiki/Euler_angles)
     * on each axis.
     * 
     * See also: graphene_quaternion_init_from_euler()
     */
    initFromRadians(radX: number, radY: number, radZ: number): Quaternion
    /**
     * Initializes a #graphene_quaternion_t with the values from `src`.
     */
    initFromVec4(src: Vec4): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using the identity
     * transformation.
     */
    initIdentity(): Quaternion
    /**
     * Inverts a #graphene_quaternion_t, and returns the conjugate
     * quaternion of `q`.
     */
    invert(): /* res */ Quaternion
    /**
     * Multiplies two #graphene_quaternion_t `a` and `b`.
     */
    multiply(b: Quaternion): /* res */ Quaternion
    /**
     * Normalizes a #graphene_quaternion_t.
     */
    normalize(): /* res */ Quaternion
    /**
     * Scales all the elements of a #graphene_quaternion_t `q` using
     * the given scalar factor.
     */
    scale(factor: number): /* res */ Quaternion
    /**
     * Interpolates between the two given quaternions using a spherical
     * linear interpolation, or [SLERP](http://en.wikipedia.org/wiki/Slerp),
     * using the given interpolation `factor`.
     */
    slerp(b: Quaternion, factor: number): /* res */ Quaternion
    /**
     * Converts a quaternion into an `angle,` `axis` pair.
     */
    toAngleVec3(): [ /* angle */ number, /* axis */ Vec3 ]
    /**
     * Converts a #graphene_quaternion_t to its corresponding rotations
     * on the [Euler angles](http://en.wikipedia.org/wiki/Euler_angles)
     * on each axis.
     */
    toAngles(): [ /* degX */ number | null, /* degY */ number | null, /* degZ */ number | null ]
    /**
     * Converts a quaternion into a transformation matrix expressing
     * the rotation defined by the #graphene_quaternion_t.
     */
    toMatrix(): /* m */ Matrix
    /**
     * Converts a #graphene_quaternion_t to its corresponding rotations
     * on the [Euler angles](http://en.wikipedia.org/wiki/Euler_angles)
     * on each axis.
     */
    toRadians(): [ /* radX */ number | null, /* radY */ number | null, /* radZ */ number | null ]
    /**
     * Copies the components of a #graphene_quaternion_t into a
     * #graphene_vec4_t.
     */
    toVec4(): /* res */ Vec4
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Quaternion
}
class Ray {
    /* Methods of Graphene-1.0.Graphene.Ray */
    /**
     * Checks whether the two given #graphene_ray_t are equal.
     */
    equal(b: Ray): boolean
    /**
     * Frees the resources allocated by graphene_ray_alloc().
     */
    free(): void
    /**
     * Computes the point on the given #graphene_ray_t that is closest to the
     * given point `p`.
     */
    getClosestPointToPoint(p: Point3D): /* res */ Point3D
    /**
     * Retrieves the direction of the given #graphene_ray_t.
     */
    getDirection(): /* direction */ Vec3
    /**
     * Computes the distance of the origin of the given #graphene_ray_t from the
     * given plane.
     * 
     * If the ray does not intersect the plane, this function returns `INFINITY`.
     */
    getDistanceToPlane(p: Plane): number
    /**
     * Computes the distance of the closest approach between the
     * given #graphene_ray_t `r` and the point `p`.
     * 
     * The closest approach to a ray from a point is the distance
     * between the point and the projection of the point on the
     * ray itself.
     */
    getDistanceToPoint(p: Point3D): number
    /**
     * Retrieves the origin of the given #graphene_ray_t.
     */
    getOrigin(): /* origin */ Point3D
    /**
     * Retrieves the coordinates of a point at the distance `t` along the
     * given #graphene_ray_t.
     */
    getPositionAt(t: number): /* position */ Point3D
    /**
     * Initializes the given #graphene_ray_t using the given `origin`
     * and `direction` values.
     */
    init(origin?: Point3D | null, direction?: Vec3 | null): Ray
    /**
     * Initializes the given #graphene_ray_t using the origin and direction
     * values of another #graphene_ray_t.
     */
    initFromRay(src: Ray): Ray
    /**
     * Initializes the given #graphene_ray_t using the given vectors.
     */
    initFromVec3(origin?: Vec3 | null, direction?: Vec3 | null): Ray
    /**
     * Intersects the given #graphene_ray_t `r` with the given
     * #graphene_box_t `b`.
     */
    intersectBox(b: Box): [ /* returnType */ RayIntersectionKind, /* tOut */ number ]
    /**
     * Intersects the given #graphene_ray_t `r` with the given
     * #graphene_sphere_t `s`.
     */
    intersectSphere(s: Sphere): [ /* returnType */ RayIntersectionKind, /* tOut */ number ]
    /**
     * Intersects the given #graphene_ray_t `r` with the given
     * #graphene_triangle_t `t`.
     */
    intersectTriangle(t: Triangle): [ /* returnType */ RayIntersectionKind, /* tOut */ number ]
    /**
     * Checks whether the given #graphene_ray_t `r` intersects the
     * given #graphene_box_t `b`.
     * 
     * See also: graphene_ray_intersect_box()
     */
    intersectsBox(b: Box): boolean
    /**
     * Checks if the given #graphene_ray_t `r` intersects the
     * given #graphene_sphere_t `s`.
     * 
     * See also: graphene_ray_intersect_sphere()
     */
    intersectsSphere(s: Sphere): boolean
    /**
     * Checks whether the given #graphene_ray_t `r` intersects the
     * given #graphene_triangle_t `b`.
     * 
     * See also: graphene_ray_intersect_triangle()
     */
    intersectsTriangle(t: Triangle): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Ray
}
class Rect {
    /* Fields of Graphene-1.0.Graphene.Rect */
    /**
     * the coordinates of the origin of the rectangle
     */
    readonly origin: Point
    /**
     * the size of the rectangle
     */
    readonly size: Size
    /* Methods of Graphene-1.0.Graphene.Rect */
    /**
     * Checks whether a #graphene_rect_t contains the given coordinates.
     */
    containsPoint(p: Point): boolean
    /**
     * Checks whether a #graphene_rect_t fully contains the given
     * rectangle.
     */
    containsRect(b: Rect): boolean
    /**
     * Checks whether the two given rectangle are equal.
     */
    equal(b: Rect): boolean
    /**
     * Expands a #graphene_rect_t to contain the given #graphene_point_t.
     */
    expand(p: Point): /* res */ Rect
    /**
     * Frees the resources allocated by graphene_rect_alloc().
     */
    free(): void
    /**
     * Compute the area of given normalized rectangle.
     */
    getArea(): number
    /**
     * Retrieves the coordinates of the bottom-left corner of the given rectangle.
     */
    getBottomLeft(): /* p */ Point
    /**
     * Retrieves the coordinates of the bottom-right corner of the given rectangle.
     */
    getBottomRight(): /* p */ Point
    /**
     * Retrieves the coordinates of the center of the given rectangle.
     */
    getCenter(): /* p */ Point
    /**
     * Retrieves the normalized height of the given rectangle.
     */
    getHeight(): number
    /**
     * Retrieves the coordinates of the top-left corner of the given rectangle.
     */
    getTopLeft(): /* p */ Point
    /**
     * Retrieves the coordinates of the top-right corner of the given rectangle.
     */
    getTopRight(): /* p */ Point
    /**
     * Computes the four vertices of a #graphene_rect_t.
     */
    getVertices(): /* vertices */ Vec2[]
    /**
     * Retrieves the normalized width of the given rectangle.
     */
    getWidth(): number
    /**
     * Retrieves the normalized X coordinate of the origin of the given
     * rectangle.
     */
    getX(): number
    /**
     * Retrieves the normalized Y coordinate of the origin of the given
     * rectangle.
     */
    getY(): number
    /**
     * Initializes the given #graphene_rect_t with the given values.
     * 
     * This function will implicitly normalize the #graphene_rect_t
     * before returning.
     */
    init(x: number, y: number, width: number, height: number): Rect
    /**
     * Initializes `r` using the given `src` rectangle.
     * 
     * This function will implicitly normalize the #graphene_rect_t
     * before returning.
     */
    initFromRect(src: Rect): Rect
    /**
     * Changes the given rectangle to be smaller, or larger depending on the
     * given inset parameters.
     * 
     * To create an inset rectangle, use positive `d_x` or `d_y` values; to
     * create a larger, encompassing rectangle, use negative `d_x` or `d_y`
     * values.
     * 
     * The origin of the rectangle is offset by `d_x` and `d_y,` while the size
     * is adjusted by `(2 * `d_x,` 2 * `d_y)``. If `d_x` and `d_y` are positive
     * values, the size of the rectangle is decreased; if `d_x` and `d_y` are
     * negative values, the size of the rectangle is increased.
     * 
     * If the size of the resulting inset rectangle has a negative width or
     * height then the size will be set to zero.
     */
    inset(dX: number, dY: number): Rect
    /**
     * Changes the given rectangle to be smaller, or larger depending on the
     * given inset parameters.
     * 
     * To create an inset rectangle, use positive `d_x` or `d_y` values; to
     * create a larger, encompassing rectangle, use negative `d_x` or `d_y`
     * values.
     * 
     * The origin of the rectangle is offset by `d_x` and `d_y,` while the size
     * is adjusted by `(2 * `d_x,` 2 * `d_y)``. If `d_x` and `d_y` are positive
     * values, the size of the rectangle is decreased; if `d_x` and `d_y` are
     * negative values, the size of the rectangle is increased.
     * 
     * If the size of the resulting inset rectangle has a negative width or
     * height then the size will be set to zero.
     */
    insetR(dX: number, dY: number): /* res */ Rect
    /**
     * Linearly interpolates the origin and size of the two given
     * rectangles.
     */
    interpolate(b: Rect, factor: number): /* res */ Rect
    /**
     * Computes the intersection of the two given rectangles.
     * 
     * ![](rectangle-intersection.png)
     * 
     * The intersection in the image above is the blue outline.
     * 
     * If the two rectangles do not intersect, `res` will contain
     * a degenerate rectangle with origin in (0, 0) and a size of 0.
     */
    intersection(b: Rect): [ /* returnType */ boolean, /* res */ Rect | null ]
    /**
     * Normalizes the passed rectangle.
     * 
     * This function ensures that the size of the rectangle is made of
     * positive values, and that the origin is the top-left corner of
     * the rectangle.
     */
    normalize(): Rect
    /**
     * Normalizes the passed rectangle.
     * 
     * This function ensures that the size of the rectangle is made of
     * positive values, and that the origin is in the top-left corner
     * of the rectangle.
     */
    normalizeR(): /* res */ Rect
    /**
     * Offsets the origin by `d_x` and `d_y`.
     * 
     * The size of the rectangle is unchanged.
     */
    offset(dX: number, dY: number): Rect
    /**
     * Offsets the origin of the given rectangle by `d_x` and `d_y`.
     * 
     * The size of the rectangle is left unchanged.
     */
    offsetR(dX: number, dY: number): /* res */ Rect
    /**
     * Rounds the origin and size of the given rectangle to
     * their nearest integer values; the rounding is guaranteed
     * to be large enough to have an area bigger or equal to the
     * original rectangle, but might not fully contain its extents.
     * Use graphene_rect_round_extents() in case you need to round
     * to a rectangle that covers fully the original one.
     * 
     * This function is the equivalent of calling `floor` on
     * the coordinates of the origin, and `ceil` on the size.
     */
    round(): /* res */ Rect
    /**
     * Rounds the origin of the given rectangle to its nearest
     * integer value and and recompute the size so that the
     * rectangle is large enough to contain all the conrners
     * of the original rectangle.
     * 
     * This function is the equivalent of calling `floor` on
     * the coordinates of the origin, and recomputing the size
     * calling `ceil` on the bottom-right coordinates.
     * 
     * If you want to be sure that the rounded rectangle
     * completely covers the area that was covered by the
     * original rectangle — i.e. you want to cover the area
     * including all its corners — this function will make sure
     * that the size is recomputed taking into account the ceiling
     * of the coordinates of the bottom-right corner.
     * If the difference between the original coordinates and the
     * coordinates of the rounded rectangle is greater than the
     * difference between the original size and and the rounded
     * size, then the move of the origin would not be compensated
     * by a move in the anti-origin, leaving the corners of the
     * original rectangle outside the rounded one.
     */
    roundExtents(): /* res */ Rect
    /**
     * Rounds the origin and the size of the given rectangle to
     * their nearest integer values; the rounding is guaranteed
     * to be large enough to contain the original rectangle.
     */
    roundToPixel(): Rect
    /**
     * Scales the size and origin of a rectangle horizontaly by `s_h,`
     * and vertically by `s_v`. The result `res` is normalized.
     */
    scale(sH: number, sV: number): /* res */ Rect
    /**
     * Computes the union of the two given rectangles.
     * 
     * ![](rectangle-union.png)
     * 
     * The union in the image above is the blue outline.
     */
    union(b: Rect): /* res */ Rect
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Allocates a new #graphene_rect_t.
     * 
     * The contents of the returned rectangle are undefined.
     */
    static alloc(): Rect
    /**
     * Returns a degenerate rectangle with origin fixed at (0, 0) and
     * a size of 0, 0.
     */
    static zero(): Rect
}
class Simd4F {
    static name: string
}
class Simd4X4F {
    static name: string
}
class Size {
    /* Fields of Graphene-1.0.Graphene.Size */
    /**
     * the width
     */
    readonly width: number
    /**
     * the height
     */
    readonly height: number
    /* Methods of Graphene-1.0.Graphene.Size */
    /**
     * Checks whether the two give #graphene_size_t are equal.
     */
    equal(b: Size): boolean
    /**
     * Frees the resources allocated by graphene_size_alloc().
     */
    free(): void
    /**
     * Initializes a #graphene_size_t using the given `width` and `height`.
     */
    init(width: number, height: number): Size
    /**
     * Initializes a #graphene_size_t using the width and height of
     * the given `src`.
     */
    initFromSize(src: Size): Size
    /**
     * Linearly interpolates the two given #graphene_size_t using the given
     * interpolation `factor`.
     */
    interpolate(b: Size, factor: number): /* res */ Size
    /**
     * Scales the components of a #graphene_size_t using the given `factor`.
     */
    scale(factor: number): /* res */ Size
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Size
    /**
     * A constant pointer to a zero #graphene_size_t, useful for
     * equality checks and interpolations.
     */
    static zero(): Size
}
class Sphere {
    /* Methods of Graphene-1.0.Graphene.Sphere */
    /**
     * Checks whether the given `point` is contained in the volume
     * of a #graphene_sphere_t.
     */
    containsPoint(point: Point3D): boolean
    /**
     * Computes the distance of the given `point` from the surface of
     * a #graphene_sphere_t.
     */
    distance(point: Point3D): number
    /**
     * Checks whether two #graphene_sphere_t are equal.
     */
    equal(b: Sphere): boolean
    /**
     * Frees the resources allocated by graphene_sphere_alloc().
     */
    free(): void
    /**
     * Computes the bounding box capable of containing the
     * given #graphene_sphere_t.
     */
    getBoundingBox(): /* box */ Box
    /**
     * Retrieves the coordinates of the center of a #graphene_sphere_t.
     */
    getCenter(): /* center */ Point3D
    /**
     * Retrieves the radius of a #graphene_sphere_t.
     */
    getRadius(): number
    /**
     * Initializes the given #graphene_sphere_t with the given `center` and `radius`.
     */
    init(center: Point3D | null, radius: number): Sphere
    /**
     * Initializes the given #graphene_sphere_t using the given array
     * of 3D coordinates so that the sphere includes them.
     * 
     * The center of the sphere can either be specified, or will be center
     * of the 3D volume that encompasses all `points`.
     */
    initFromPoints(points: Point3D[], center?: Point3D | null): Sphere
    /**
     * Initializes the given #graphene_sphere_t using the given array
     * of 3D coordinates so that the sphere includes them.
     * 
     * The center of the sphere can either be specified, or will be center
     * of the 3D volume that encompasses all `vectors`.
     */
    initFromVectors(vectors: Vec3[], center?: Point3D | null): Sphere
    /**
     * Checks whether the sphere has a zero radius.
     */
    isEmpty(): boolean
    /**
     * Translates the center of the given #graphene_sphere_t using the `point`
     * coordinates as the delta of the translation.
     */
    translate(point: Point3D): /* res */ Sphere
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Sphere
}
class Triangle {
    /* Methods of Graphene-1.0.Graphene.Triangle */
    /**
     * Checks whether the given triangle `t` contains the point `p`.
     */
    containsPoint(p: Point3D): boolean
    /**
     * Checks whether the two given #graphene_triangle_t are equal.
     */
    equal(b: Triangle): boolean
    /**
     * Frees the resources allocated by graphene_triangle_alloc().
     */
    free(): void
    /**
     * Computes the area of the given #graphene_triangle_t.
     */
    getArea(): number
    /**
     * Computes the [barycentric coordinates](http://en.wikipedia.org/wiki/Barycentric_coordinate_system)
     * of the given point `p`.
     * 
     * The point `p` must lie on the same plane as the triangle `t;` if the
     * point is not coplanar, the result of this function is undefined.
     * 
     * If we place the origin in the coordinates of the triangle's A point,
     * the barycentric coordinates are `u`, which is on the AC vector; and `v`
     * which is on the AB vector:
     * 
     * ![](triangle-barycentric.png)
     * 
     * The returned #graphene_vec2_t contains the following values, in order:
     * 
     *  - `res.x = u`
     *  - `res.y = v`
     */
    getBarycoords(p?: Point3D | null): [ /* returnType */ boolean, /* res */ Vec2 ]
    /**
     * Computes the bounding box of the given #graphene_triangle_t.
     */
    getBoundingBox(): /* res */ Box
    /**
     * Computes the coordinates of the midpoint of the given #graphene_triangle_t.
     * 
     * The midpoint G is the [centroid](https://en.wikipedia.org/wiki/Centroid#Triangle_centroid)
     * of the triangle, i.e. the intersection of its medians.
     */
    getMidpoint(): /* res */ Point3D
    /**
     * Computes the normal vector of the given #graphene_triangle_t.
     */
    getNormal(): /* res */ Vec3
    /**
     * Computes the plane based on the vertices of the given #graphene_triangle_t.
     */
    getPlane(): /* res */ Plane
    /**
     * Retrieves the three vertices of the given #graphene_triangle_t and returns
     * their coordinates as #graphene_point3d_t.
     */
    getPoints(): [ /* a */ Point3D | null, /* b */ Point3D | null, /* c */ Point3D | null ]
    /**
     * Computes the UV coordinates of the given point `p`.
     * 
     * The point `p` must lie on the same plane as the triangle `t;` if the point
     * is not coplanar, the result of this function is undefined. If `p` is %NULL,
     * the point will be set in (0, 0, 0).
     * 
     * The UV coordinates will be placed in the `res` vector:
     * 
     *  - `res.x = u`
     *  - `res.y = v`
     * 
     * See also: graphene_triangle_get_barycoords()
     */
    getUv(p: Point3D | null, uvA: Vec2, uvB: Vec2, uvC: Vec2): [ /* returnType */ boolean, /* res */ Vec2 ]
    /**
     * Retrieves the three vertices of the given #graphene_triangle_t.
     */
    getVertices(): [ /* a */ Vec3 | null, /* b */ Vec3 | null, /* c */ Vec3 | null ]
    /**
     * Initializes a #graphene_triangle_t using the three given arrays
     * of floating point values, each representing the coordinates of
     * a point in 3D space.
     */
    initFromFloat(a: number[], b: number[], c: number[]): Triangle
    /**
     * Initializes a #graphene_triangle_t using the three given 3D points.
     */
    initFromPoint3d(a?: Point3D | null, b?: Point3D | null, c?: Point3D | null): Triangle
    /**
     * Initializes a #graphene_triangle_t using the three given vectors.
     */
    initFromVec3(a?: Vec3 | null, b?: Vec3 | null, c?: Vec3 | null): Triangle
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Triangle
}
class Vec2 {
    /* Methods of Graphene-1.0.Graphene.Vec2 */
    /**
     * Adds each component of the two passed vectors and places
     * each result into the components of `res`.
     */
    add(b: Vec2): /* res */ Vec2
    /**
     * Divides each component of the first operand `a` by the corresponding
     * component of the second operand `b,` and places the results into the
     * vector `res`.
     */
    divide(b: Vec2): /* res */ Vec2
    /**
     * Computes the dot product of the two given vectors.
     */
    dot(b: Vec2): number
    /**
     * Checks whether the two given #graphene_vec2_t are equal.
     */
    equal(v2: Vec2): boolean
    /**
     * Frees the resources allocated by `v`
     */
    free(): void
    /**
     * Retrieves the X component of the #graphene_vec2_t.
     */
    getX(): number
    /**
     * Retrieves the Y component of the #graphene_vec2_t.
     */
    getY(): number
    /**
     * Initializes a #graphene_vec2_t using the given values.
     * 
     * This function can be called multiple times.
     */
    init(x: number, y: number): Vec2
    /**
     * Initializes `v` with the contents of the given array.
     */
    initFromFloat(src: number[]): Vec2
    /**
     * Copies the contents of `src` into `v`.
     */
    initFromVec2(src: Vec2): Vec2
    /**
     * Linearly interpolates `v1` and `v2` using the given `factor`.
     */
    interpolate(v2: Vec2, factor: number): /* res */ Vec2
    /**
     * Computes the length of the given vector.
     */
    length(): number
    /**
     * Compares the two given vectors and places the maximum
     * values of each component into `res`.
     */
    max(b: Vec2): /* res */ Vec2
    /**
     * Compares the two given vectors and places the minimum
     * values of each component into `res`.
     */
    min(b: Vec2): /* res */ Vec2
    /**
     * Multiplies each component of the two passed vectors and places
     * each result into the components of `res`.
     */
    multiply(b: Vec2): /* res */ Vec2
    /**
     * Compares the two given #graphene_vec2_t vectors and checks
     * whether their values are within the given `epsilon`.
     */
    near(v2: Vec2, epsilon: number): boolean
    /**
     * Negates the given #graphene_vec2_t.
     */
    negate(): /* res */ Vec2
    /**
     * Computes the normalized vector for the given vector `v`.
     */
    normalize(): /* res */ Vec2
    /**
     * Multiplies all components of the given vector with the given scalar `factor`.
     */
    scale(factor: number): /* res */ Vec2
    /**
     * Subtracts from each component of the first operand `a` the
     * corresponding component of the second operand `b` and places
     * each result into the components of `res`.
     */
    subtract(b: Vec2): /* res */ Vec2
    /**
     * Stores the components of `v` into an array.
     */
    toFloat(): /* dest */ number[]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Vec2
    /**
     * Retrieves a constant vector with (1, 1) components.
     */
    static one(): Vec2
    /**
     * Retrieves a constant vector with (1, 0) components.
     */
    static xAxis(): Vec2
    /**
     * Retrieves a constant vector with (0, 1) components.
     */
    static yAxis(): Vec2
    /**
     * Retrieves a constant vector with (0, 0) components.
     */
    static zero(): Vec2
}
class Vec3 {
    /* Methods of Graphene-1.0.Graphene.Vec3 */
    /**
     * Adds each component of the two given vectors.
     */
    add(b: Vec3): /* res */ Vec3
    /**
     * Computes the cross product of the two given vectors.
     */
    cross(b: Vec3): /* res */ Vec3
    /**
     * Divides each component of the first operand `a` by the corresponding
     * component of the second operand `b,` and places the results into the
     * vector `res`.
     */
    divide(b: Vec3): /* res */ Vec3
    /**
     * Computes the dot product of the two given vectors.
     */
    dot(b: Vec3): number
    /**
     * Checks whether the two given #graphene_vec3_t are equal.
     */
    equal(v2: Vec3): boolean
    /**
     * Frees the resources allocated by `v`
     */
    free(): void
    /**
     * Retrieves the first component of the given vector `v`.
     */
    getX(): number
    /**
     * Creates a #graphene_vec2_t that contains the first and second
     * components of the given #graphene_vec3_t.
     */
    getXy(): /* res */ Vec2
    /**
     * Creates a #graphene_vec3_t that contains the first two components of
     * the given #graphene_vec3_t, and the third component set to 0.
     */
    getXy0(): /* res */ Vec3
    /**
     * Converts a #graphene_vec3_t in a #graphene_vec4_t using 0.0
     * as the value for the fourth component of the resulting vector.
     */
    getXyz0(): /* res */ Vec4
    /**
     * Converts a #graphene_vec3_t in a #graphene_vec4_t using 1.0
     * as the value for the fourth component of the resulting vector.
     */
    getXyz1(): /* res */ Vec4
    /**
     * Converts a #graphene_vec3_t in a #graphene_vec4_t using `w` as
     * the value of the fourth component of the resulting vector.
     */
    getXyzw(w: number): /* res */ Vec4
    /**
     * Retrieves the second component of the given vector `v`.
     */
    getY(): number
    /**
     * Retrieves the third component of the given vector `v`.
     */
    getZ(): number
    /**
     * Initializes a #graphene_vec3_t using the given values.
     * 
     * This function can be called multiple times.
     */
    init(x: number, y: number, z: number): Vec3
    /**
     * Initializes a #graphene_vec3_t with the values from an array.
     */
    initFromFloat(src: number[]): Vec3
    /**
     * Initializes a #graphene_vec3_t with the values of another
     * #graphene_vec3_t.
     */
    initFromVec3(src: Vec3): Vec3
    /**
     * Linearly interpolates `v1` and `v2` using the given `factor`.
     */
    interpolate(v2: Vec3, factor: number): /* res */ Vec3
    /**
     * Retrieves the length of the given vector `v`.
     */
    length(): number
    /**
     * Compares each component of the two given vectors and creates a
     * vector that contains the maximum values.
     */
    max(b: Vec3): /* res */ Vec3
    /**
     * Compares each component of the two given vectors and creates a
     * vector that contains the minimum values.
     */
    min(b: Vec3): /* res */ Vec3
    /**
     * Multiplies each component of the two given vectors.
     */
    multiply(b: Vec3): /* res */ Vec3
    /**
     * Compares the two given #graphene_vec3_t vectors and checks
     * whether their values are within the given `epsilon`.
     */
    near(v2: Vec3, epsilon: number): boolean
    /**
     * Negates the given #graphene_vec3_t.
     */
    negate(): /* res */ Vec3
    /**
     * Normalizes the given #graphene_vec3_t.
     */
    normalize(): /* res */ Vec3
    /**
     * Multiplies all components of the given vector with the given scalar `factor`.
     */
    scale(factor: number): /* res */ Vec3
    /**
     * Subtracts from each component of the first operand `a` the
     * corresponding component of the second operand `b` and places
     * each result into the components of `res`.
     */
    subtract(b: Vec3): /* res */ Vec3
    /**
     * Copies the components of a #graphene_vec3_t into the given array.
     */
    toFloat(): /* dest */ number[]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Vec3
    /**
     * Provides a constant pointer to a vector with three components,
     * all sets to 1.
     */
    static one(): Vec3
    /**
     * Provides a constant pointer to a vector with three components
     * with values set to (1, 0, 0).
     */
    static xAxis(): Vec3
    /**
     * Provides a constant pointer to a vector with three components
     * with values set to (0, 1, 0).
     */
    static yAxis(): Vec3
    /**
     * Provides a constant pointer to a vector with three components
     * with values set to (0, 0, 1).
     */
    static zAxis(): Vec3
    /**
     * Provides a constant pointer to a vector with three components,
     * all sets to 0.
     */
    static zero(): Vec3
}
class Vec4 {
    /* Methods of Graphene-1.0.Graphene.Vec4 */
    /**
     * Adds each component of the two given vectors.
     */
    add(b: Vec4): /* res */ Vec4
    /**
     * Divides each component of the first operand `a` by the corresponding
     * component of the second operand `b,` and places the results into the
     * vector `res`.
     */
    divide(b: Vec4): /* res */ Vec4
    /**
     * Computes the dot product of the two given vectors.
     */
    dot(b: Vec4): number
    /**
     * Checks whether the two given #graphene_vec4_t are equal.
     */
    equal(v2: Vec4): boolean
    /**
     * Frees the resources allocated by `v`
     */
    free(): void
    /**
     * Retrieves the value of the fourth component of the given #graphene_vec4_t.
     */
    getW(): number
    /**
     * Retrieves the value of the first component of the given #graphene_vec4_t.
     */
    getX(): number
    /**
     * Creates a #graphene_vec2_t that contains the first two components
     * of the given #graphene_vec4_t.
     */
    getXy(): /* res */ Vec2
    /**
     * Creates a #graphene_vec3_t that contains the first three components
     * of the given #graphene_vec4_t.
     */
    getXyz(): /* res */ Vec3
    /**
     * Retrieves the value of the second component of the given #graphene_vec4_t.
     */
    getY(): number
    /**
     * Retrieves the value of the third component of the given #graphene_vec4_t.
     */
    getZ(): number
    /**
     * Initializes a #graphene_vec4_t using the given values.
     * 
     * This function can be called multiple times.
     */
    init(x: number, y: number, z: number, w: number): Vec4
    /**
     * Initializes a #graphene_vec4_t with the values inside the given array.
     */
    initFromFloat(src: number[]): Vec4
    /**
     * Initializes a #graphene_vec4_t using the components of a
     * #graphene_vec2_t and the values of `z` and `w`.
     */
    initFromVec2(src: Vec2, z: number, w: number): Vec4
    /**
     * Initializes a #graphene_vec4_t using the components of a
     * #graphene_vec3_t and the value of `w`.
     */
    initFromVec3(src: Vec3, w: number): Vec4
    /**
     * Initializes a #graphene_vec4_t using the components of
     * another #graphene_vec4_t.
     */
    initFromVec4(src: Vec4): Vec4
    /**
     * Linearly interpolates `v1` and `v2` using the given `factor`.
     */
    interpolate(v2: Vec4, factor: number): /* res */ Vec4
    /**
     * Computes the length of the given #graphene_vec4_t.
     */
    length(): number
    /**
     * Compares each component of the two given vectors and creates a
     * vector that contains the maximum values.
     */
    max(b: Vec4): /* res */ Vec4
    /**
     * Compares each component of the two given vectors and creates a
     * vector that contains the minimum values.
     */
    min(b: Vec4): /* res */ Vec4
    /**
     * Multiplies each component of the two given vectors.
     */
    multiply(b: Vec4): /* res */ Vec4
    /**
     * Compares the two given #graphene_vec4_t vectors and checks
     * whether their values are within the given `epsilon`.
     */
    near(v2: Vec4, epsilon: number): boolean
    /**
     * Negates the given #graphene_vec4_t.
     */
    negate(): /* res */ Vec4
    /**
     * Normalizes the given #graphene_vec4_t.
     */
    normalize(): /* res */ Vec4
    /**
     * Multiplies all components of the given vector with the given scalar `factor`.
     */
    scale(factor: number): /* res */ Vec4
    /**
     * Subtracts from each component of the first operand `a` the
     * corresponding component of the second operand `b` and places
     * each result into the components of `res`.
     */
    subtract(b: Vec4): /* res */ Vec4
    /**
     * Stores the components of the given #graphene_vec4_t into an array
     * of floating point values.
     */
    toFloat(): /* dest */ number[]
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with all its
     * components set to 1.
     */
    static one(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with its
     * components set to (0, 0, 0, 1).
     */
    static wAxis(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with its
     * components set to (1, 0, 0, 0).
     */
    static xAxis(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with its
     * components set to (0, 1, 0, 0).
     */
    static yAxis(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with its
     * components set to (0, 0, 1, 0).
     */
    static zAxis(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with all its
     * components set to 0.
     */
    static zero(): Vec4
}
}
export default Graphene;