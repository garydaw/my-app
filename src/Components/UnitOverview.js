export default function UnitOverview({unit}) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{unit.name}</h5>
                    <div className="card-text">
                        <ol>
                            <li>Power: {unit.power}</li>
                            <li>Level: {unit.level}</li>
                            <li>Gear Level: {unit.gear_level}</li>
                        </ol>
                    </div>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
    )
}