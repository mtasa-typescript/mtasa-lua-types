/** @customConstructor Vector4 */
export class Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;

    /**
     * Create vector
     * @param x Coordinate X for the vector
     * @param y Coordinate Y for the vector
     * @param z Coordinate Z for the vector
     * @param w Coordinate W for the vector
     */
    constructor(x: number, y: number, z: number, w: number);

    /**
     * Calculates the cross product of two vectors, A and B, and is written as A × B.
     * The result is another vector which:
     * * Is orthogonal to both A and B.
     * * Its direction is determined by the
     * [https://upload.wikimedia.org/wikipedia/commons/d/d2/Right_hand_rule_cross_product.svg right-hand rule].
     * Its length is equal to the area of the parallelogram that A and B form (which in turn is equal to A's length
     * by B's length by the sine of the minimum angle between A and B).
     * @param v Another vector
     */
    cross(v: Vector4): Vector4;

    /**
     * Calculates the (standard) dot/scalar product of two vectors. If we call that vectors A and B, the dot product
     * is written as A · B. This can be used to calculate the angle between them. If the standard scalar product is 0,
     * both vectors are orthogonal.
     * @param v a vector4 object to get the dot product with
     */
    dot(v: Vector4): number;

    /**
     * Converts a vector to a unit vector (a vector of length 1).
     */
    normalize(): Vector4;

    /**
     * Returns a normalized vector (of length 1) of the vector it's used on. Differently from the ''Vector4:normalize''
     * method, this one returns a ''vector4'' and doesn't modify the original vector.
     */
    getNormalized(): Vector4;

    getSquaredLength(): number;

    getLength(): number;

    // Operations

    add: LuaAdditionMethod<Vector4, Vector4>;
    sub: LuaSubtractionMethod<Vector4, Vector4>;
    neg: LuaNegationMethod<Vector4>;
    mul: LuaMultiplicationMethod <number, Vector4>;
    div: LuaDivisionMethod <number, Vector4>;
}

/** @customConstructor Vector3 */
export class Vector3 {
    x: number;
    y: number;
    z: number;

    /**
     * Create vector
     * @param x Coordinate X for the vector
     * @param y Coordinate Y for the vector
     * @param z Coordinate Z for the vector
     */
    constructor(x: number, y: number, z: number);

    /**
     * Calculates the cross product of two vectors, A and B, and is written as A × B.
     * The result is another vector which:
     * * Is orthogonal to both A and B.
     * * Its direction is determined by the
     * [https://upload.wikimedia.org/wikipedia/commons/d/d2/Right_hand_rule_cross_product.svg right-hand rule].
     * Its length is equal to the area of the parallelogram that A and B form (which in turn is equal to A's length
     * by B's length by the sine of the minimum angle between A and B).
     * @param v Another vector
     */
    cross(v: Vector3): Vector3;

    /**
     * Calculates the (standard) dot/scalar product of two vectors. If we call that vectors A and B, the dot product
     * is written as A · B. This can be used to calculate the angle between them. If the standard scalar product is 0,
     * both vectors are orthogonal.
     * @param v a vector3 object to get the dot product with
     */
    dot(v: Vector3): number;

    /**
     * Converts a vector to a unit vector (a vector of length 1).
     */
    normalize(): Vector3;

    /**
     * Returns a normalized vector (of length 1) of the vector it's used on. Differently from the ''Vector3:normalize''
     * method, this one returns a ''vector3'' and doesn't modify the original vector.
     */
    getNormalized(): Vector3;

    getSquaredLength(): number;

    getLength(): number;

    // Operations

    add: LuaAdditionMethod<Vector3, Vector3>;
    sub: LuaSubtractionMethod<Vector3, Vector3>;
    neg: LuaNegationMethod<Vector3>;
    mul: LuaMultiplicationMethod <number, Vector3>;
    div: LuaDivisionMethod <number, Vector3>;
}

/** @customConstructor Vector2 */
export class Vector2 {
    x: number;
    y: number;

    /**
     * Create vector
     * @param x Coordinate X for the vector
     * @param y Coordinate Y for the vector
     */
    constructor(x: number, y: number);

    /**
     * Calculates the (standard) dot/scalar product of two vectors. If we call that vectors A and B, the dot product
     * is written as A · B. This can be used to calculate the angle between them. If the standard scalar product is 0,
     * both vectors are orthogonal.
     * @param v a vector3 object to get the dot product with
     */
    dot(v: Vector2): number;

    /**
     * Converts a vector to a unit vector (a vector of length 1).
     */
    normalize(): Vector3;

    /**
     * Returns a normalized vector (of length 1) of the vector it's used on. Differently from the ''Vector2:normalize''
     * method, this one returns a ''vector2'' and doesn't modify the original vector.
     */
    getNormalized(): Vector2;

    getSquaredLength(): number;

    getLength(): number;

    // Operations

    add: LuaAdditionMethod<Vector2, Vector2>;
    sub: LuaSubtractionMethod<Vector2, Vector2>;
    neg: LuaNegationMethod<Vector2>;
    mul: LuaMultiplicationMethod <number, Vector2>;
    div: LuaDivisionMethod <number, Vector2>;
}
